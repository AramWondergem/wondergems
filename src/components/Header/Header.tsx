import { component$ } from '@builder.io/qwik';
import styles from './Header.module.css';


import { MoMenu } from '@qwikest/icons/monoicons';

export interface HeaderProps {

}

export const Header = component$<HeaderProps>((props) => {
  return (
      < >
      <div class={[styles.headerOuterbox, 'outerbox']} >
          <div class={[styles.headerInnerbox ,'innerbox']}>
              <div class={['hideOnDesktop', styles.headerSpacer, styles.headerMenu]}>
                  <MoMenu/>
              </div>
              <div>
                  <h1 class={[styles.headerLogo]}><span>ARAM</span> <span class={[styles.headerLogoHide]}>WONDERGEM</span></h1>
              </div>
              <div class={['hideOnMobile']}>
                  Navlinks
              </div>
              <div class={['hideOnDesktop', ]}>
                  <MoMenu class={[styles.headerMenu]}/>
              </div>
          </div>
      </div>
      </>
  );
});
