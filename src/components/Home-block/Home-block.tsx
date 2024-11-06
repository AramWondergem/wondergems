import { $, component$ } from '@builder.io/qwik';
import styles from './Home-block.module.css';
import { Button } from '~/shared/components/ButtonAndExternalLink/Button';

export interface IntroductionProps {}

export const HomeBlock = component$<IntroductionProps>(() => {
    const onClick = $(() => alert('Hallo hier ben ik'));
    return (
        <section id={'home'} class={['outerbox']}>
            <div class={['innerbox', styles.innerBoxPage]}>
                <p class={[styles.textIntroduction]}>
                    Hi there 🖐,
                    <br />
                    My name is <span class={[styles.spanText, 'span']}>ARAM WONDERGEM</span>. I am a
                    Full Stack Web Developer located in{' '}
                    <span class={[styles.spanText, 'span']}>New York City</span> who thrives on
                    engaging in projects that solve real-world issues.
                </p>

                <div class={[styles.buttonWrapper]}>
                    <Button onClick={onClick}>See my projects</Button>
                    <span class={[styles.spanButton]}>or</span>
                    <Button onClick={onClick}>Learn more about me</Button>
                </div>
            </div>
        </section>
    );
});
