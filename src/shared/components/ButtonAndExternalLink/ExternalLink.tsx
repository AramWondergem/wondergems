import { component$, Slot } from '@builder.io/qwik';
import styles from './Button.module.css';

export interface ExternalLinkProps {
    url: string;
}

export const ExternalLink = component$<ExternalLinkProps>((props) => {
    return (
        <a class={[styles.button]} href={props.url} rel={'noopener'} target={'_blank'}>
            <Slot />
        </a>
    );
});
