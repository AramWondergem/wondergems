import { component$, Slot } from '@builder.io/qwik';
import styles from './Span.module.css';

export interface SpanProps {
    size: string;
    display?: string;
}

export const Span = component$<SpanProps>((props) => {
    return (
        <span class={[styles.spanStyle]}>
            <Slot />
        </span>
    );
});
