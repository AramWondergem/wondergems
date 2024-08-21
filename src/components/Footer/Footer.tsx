import { component$ } from '@builder.io/qwik';
import  styles  from './Footer.module.css'

export interface FooterProps {

}

export const Footer = component$<FooterProps>(() => {
  return (
    <div class={[styles.footerOuterbox, 'outerbox']}>
      <div class={[styles.footerInnerbox, 'innerbox']}>
          <footer class={[styles.footerText]}><small>COPYRIGHT © {new Date().getFullYear()} ARAM WONDERGEM</small></footer>
      </div>
    </div>
  );
});
