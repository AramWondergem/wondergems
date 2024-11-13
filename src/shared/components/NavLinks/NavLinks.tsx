import { component$, type PropFunction, type QRL, $ } from '@builder.io/qwik';
import styles from './NavLinks.module.css';

export interface NavLinksProps {
    flexDirection: string;
    onClick?: PropFunction<QRL<() => void>> | null;
}

export const NavLinks = component$<NavLinksProps>((props) => {
    // closes the menu when the menu bar is open. this is only when screen is smaller than 780 px
    const onClickNav = $(() => {
        if (props.onClick) {
            props.onClick();
        }
    });

    return (
        <nav>
            <ul class={[styles.navLinkWrapper, `${styles[props.flexDirection]}`]}>
                <li>
                    <a onClick$={() => onClickNav()} href='#home'>
                        Home
                    </a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()} href='#projects'>
                        Projects
                    </a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()} href={'#about'}>
                        About
                    </a>
                </li>
                <li>
                    <a onClick$={() => onClickNav()} href={'#contact'}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
});
