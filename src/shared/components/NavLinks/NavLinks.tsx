import { component$ } from '@builder.io/qwik';
import styles from './NavLinks.module.css';

export interface NavLinksProps {
    flexDirection: string;
    // onClick: () => void;
}

export const NavLinks = component$<NavLinksProps>((props) => {
    // closes the menu when the menu bar is open. this is only when screen is smaller than 780 px

    return (
        <nav>
            <ul class={[styles.navLinkWrapper, `${styles[props.flexDirection]}`]}>
                {/*<li>*/}
                {/*    <a onClick$={$(() => props.onClick())} href='#home'>*/}
                {/*        Home*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a onClick$={() => onClickNav()} href='#projects'>*/}
                {/*        Projects*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a onClick$={() => onClickNav()} href={'#about'}>*/}
                {/*        About*/}
                {/*    </a>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a onClick$={() => onClickNav()} href={'#contact'}>*/}
                {/*        Contact*/}
                {/*    </a>*/}
                {/*</li>*/}
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href={'#about'}>About</a>
                </li>
                <li>
                    <a href={'#contact'}>Contact</a>
                </li>
            </ul>
        </nav>
    );
});
