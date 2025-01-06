import { component$ } from '@builder.io/qwik';
import styles from './Home-block.module.css';
import { LinkButton } from '~/shared/components/ButtonAndExternalLink/LinkButton';

export interface IntroductionProps {}

export const HomeBlock = component$<IntroductionProps>(() => {
    return (
        <section id={'home'} class={['outerbox']}>
            <div class={['innerbox', styles.innerBoxPage]}>
                <p class={[styles.textIntroduction]}>
                    Hi there 🖐,
                    <br />
                    It's great to have you on my website. My name is{' '}
                    <span class={[styles.spanText, 'span']}>ARAM WONDERGEM</span>, a Full Stack Web
                    Developer located in{' '}
                    <span class={[styles.spanText, 'span']}>New York City</span>. I thrive on
                    tackling projects that address{' '}
                    <span class={[styles.spanText, 'span']}>real-world</span> issues.
                </p>

                <div class={[styles.buttonWrapper]}>
                    <LinkButton url={'#projects'} target={'_self'}>
                        See my projects
                    </LinkButton>
                    <span class={[styles.spanButton]}>or</span>
                    <LinkButton url={'#about'} target={'_self'}>
                        Learn more about me
                    </LinkButton>
                </div>
            </div>
        </section>
    );
});
