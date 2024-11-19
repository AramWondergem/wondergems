import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HomeBlock } from '~/components/Home-block/Home-block';
import { ProjectBlock } from '~/components/Project-block/Project-block';
import { AboutBlock } from '~/components/About-block/About-block';
import { ContactBlock } from '~/components/Contact-block/Contact-block';

export default component$(() => {
    return (
        <div class={['outerbox']}>
            <HomeBlock />
            <ProjectBlock />
            <AboutBlock />
            <ContactBlock />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Wondergems | portfolio ',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description'
        }
    ]
};
