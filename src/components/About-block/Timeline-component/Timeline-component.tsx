import { component$, Slot } from '@builder.io/qwik';
import styles from './Timeline-component.module.css';

export interface TimelineComponentProps {
    timePeriod: string;
}

export const TimelineComponent = component$<TimelineComponentProps>((props) => {
    return (
        <div class={[styles.timelineElementWrapper]}>
            <div class={[styles.dateWrapper, 'hideOnMobile']}>
                <p class={[styles.date]}>{props.timePeriod}</p>
            </div>
            <div class={[styles.lineWrapper]}>
                <div class={[styles.circle]}></div>
                <div class={[styles.line]}></div>
            </div>
            <div class={[styles.textBlockWrapper]}>
                <div class={[styles.dateWrapper, 'hideOnDesktop']}>
                    <p class={[styles.date]}>{props.timePeriod}</p>
                </div>
                <Slot />
            </div>
        </div>
    );
});
