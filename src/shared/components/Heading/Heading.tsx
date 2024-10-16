import { Slot, component$ } from '@builder.io/qwik';
import styles from './Heading.module.css';

export interface HeadingProps {
    bgColor: string;
    size: string;
}

export const Heading = component$<HeadingProps>((props) => {
    return (
        <div
            class={[
                styles.headingWrapper,
                `${styles[props.bgColor]}`,
                styles.headerText,
                `${styles[props.size]}`
            ]}
        >
            <Slot />
        </div>
    );
});
