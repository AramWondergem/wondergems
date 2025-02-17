import { component$, useSignal, useStore, useVisibleTask$ } from '@builder.io/qwik';
import styles from './CO2Element.module.css';

interface CO2 {
    t: number;
    c: number;
    p: number;
}
export interface CO2ElementProps {}

export const CO2Element = component$<CO2ElementProps>(() => {
    const CO2Data = useStore({ ok: false, data: {} as CO2 });
    const loading = useSignal(true);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
        const encodedUrl = encodeURIComponent(window.location.href);
        const storageKey = `wcb_${encodedUrl}`;
        const cachedData = localStorage.getItem(storageKey);
        const now = Date.now();

        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            if (now - parsedData.t < 86400000) {
                CO2Data.data = parsedData;
                CO2Data.ok = true;
                loading.value = false;
                return;
            }
        }

        try {
            const response = await fetch(`https://api.websitecarbon.com/b?url=${encodedUrl}`);
            if (!response.ok) {
                throw new Error('Failed to fetch carbon data');
            }

            const data = await response.json();
            console.log(data);

            data.t = now;
            localStorage.setItem(storageKey, JSON.stringify(data));
            CO2Data.data = data;
            CO2Data.ok = true;
            loading.value = false;
        } catch (error) {
            loading.value = false;
            console.error(error);
            CO2Data.ok = false;
        }
    });

    return (
        <div class={[styles.carbonbadge]} tabIndex={0}>
            <div id='wcb' class='carbonbadge'></div>
            <script src='https://unpkg.com/website-carbon-badges@1.1.3/b.min.js' defer></script>
            <div class={[styles.numberAndLinkWrapper]}>
                {loading.value ? (
                    <span class={[styles.number]}>Measuring CO₂...</span>
                ) : (
                    <span class={[styles.number]}>
                        {CO2Data.ok ? `${CO2Data.data.c}g of CO<sub>2</sub>/view` : 'No result'}
                    </span>
                )}

                <a
                    class={[styles.link]}
                    target='_blank'
                    rel='noopener'
                    href='https://websitecarbon.com'
                >
                    Website Carbon
                </a>
            </div>

            {!loading.value && CO2Data.ok ? (
                <span class={[styles.text]}>Cleaner than {CO2Data.data.p}% of pages tested</span>
            ) : (
                <span></span>
            )}
        </div>
    );
});
