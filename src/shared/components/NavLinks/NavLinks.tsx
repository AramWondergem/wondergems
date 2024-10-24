import { component$, type PropFunction, type QRL, $ } from '@builder.io/qwik';
import styles from './NavLinks.module.css';

export interface NavLinksProps {
    flexDirection: string;
    onClick?: PropFunction<QRL<() => void>> | null;
}

export const NavLinks = component$<NavLinksProps>((props) => {
    const onClickNav = $(() => {
        if (props.onClick) {
            props.onClick();
        }
    });

    return (
        <nav>
            <ul class={[styles.navLinkWrapper, `${styles[props.flexDirection]}`]}>
                <li>
                    <a onClick$={() => onClickNav()} href='#introduction'>
                        Home
                    </a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()} href='#projects'>
                        Projects
                    </a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()}>About</a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()}>Contact</a>
                </li>
            </ul>
        </nav>
    );
});
