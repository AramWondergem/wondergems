import { Slot, component$ } from '@builder.io/qwik';
import styles from './Heading.module.css';

export interface HeadingProps {
    bgColor: string; // this could be 'yellow' or 'rose'
    size: string; // size: 'small' | 'big'; big makes the title sticky. small decreases the line height.
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
