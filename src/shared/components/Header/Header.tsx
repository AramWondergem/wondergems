import { component$, Signal, useSignal } from '@builder.io/qwik';
import styles from './Header.module.css';
import { MoMenu } from '@qwikest/icons/monoicons';
import { Menu } from '~/shared/components/Menu/Menu';
import { NavLinks } from '~/shared/components/NavLinks/NavLinks';

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
    const isOpen: Signal<boolean> = useSignal(false);
    return (
        <>
            <div class={[styles.headerOuterbox, 'outerbox']}>
                <div class={[styles.headerInnerbox]}>
                    <div class={['hideOnDesktop', styles.headerSpacer, styles.headerMenuWrapper]}>
                        <MoMenu class={[styles.headerMenu]} />
                    </div>
                    <div>
                        <h1 class={[styles.headerLogo]}>
                            <span>ARAM</span> <span class={[styles.headerLogoHide]}>WONDERGEM</span>
                        </h1>
                    </div>
                    <div class={['hideOnMobile', styles.navLinks]}>
                        <NavLinks flexDirection={'row'} onClick={null} />
                    </div>
                    <button
                        class={['hideOnDesktop', styles.headerMenuWrapper]}
                        onClick$={() => (isOpen.value = true)}
                    >
                        <MoMenu class={[styles.headerMenu, styles.headerMenuButton]} />
                    </button>
                </div>
            </div>
            <Menu isOpen={isOpen} />
        </>
    );
});
