import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import styles from './NavLinks.module.css';

export interface NavLinksProps {
    flexDirection: string;
    onClick$: QRL<() => void> | null;
}

export const NavLinks = component$<NavLinksProps>((props) => {
    return (
        <nav>
            <ul class={[styles.navLinkWrapper, `${styles[props.flexDirection]}`]}>
                <li>
                    <a onClick$={props.onClick$} href='#home'>
                        Home
                    </a>
                </li>
                <li>
                    <a onClick$={props.onClick$} href='#projects'>
                        Projects
                    </a>
                </li>
                <li>
                    <a onClick$={props.onClick$} href={'#about'}>
                        About
                    </a>
                </li>
                <li>
                    <a onClick$={props.onClick$} href={'#contact'}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
});
