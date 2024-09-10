import { component$ } from '@builder.io/qwik';
import styles from './Header.module.css';

import { MoMenu } from '@qwikest/icons/monoicons';

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
    return (
        <>
            <div class={[styles.headerOuterbox, 'outerbox']}>
                <div class={['innerbox', styles.headerInnerbox]}>
                    <div class={['hideOnDesktop', styles.headerSpacer, styles.headerMenuWrapper]}>
                        <MoMenu class={[styles.headerMenu]} />
                    </div>
                    <div>
                        <h1 class={[styles.headerLogo]}>
                            <span>ARAM</span> <span class={[styles.headerLogoHide]}>WONDERGEM</span>
                        </h1>
                    </div>
                    <div class={['hideOnMobile', styles.navLinks]}>Navlinks</div>
                    <div class={['hideOnDesktop', styles.headerMenuWrapper]}>
                        <MoMenu class={[styles.headerMenu, styles.headerMenuButton]} />
                    </div>
                </div>
            </div>
        </>
    );
});
