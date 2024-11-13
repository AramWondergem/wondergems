import { component$, Slot } from '@builder.io/qwik';
import styles from './Button.module.css';
import { Link } from '@builder.io/qwik-city';

export interface ExternalLinkProps {
    url: string;
    target: string;
}

export const LinkButton = component$<ExternalLinkProps>((props) => {
    return (
        <Link class={[styles.button]} href={props.url} rel={'noopener'} target={props.target}>
            <Slot />
        </Link>
    );
});
