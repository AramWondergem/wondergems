import { $, component$ } from '@builder.io/qwik';
import styles from './Introduction.module.css';
import { Button } from '~/shared/components/Button/Button';
import { Span } from '~/shared/components/Span/Span';

export interface IntroductionProps {}

export const Introduction = component$<IntroductionProps>(() => {
    const onClick = $(() => alert('Hallo hier ben ik'));
    return (
        <section class={['outerbox']}>
            <div class={['innerbox', styles.innerBoxPage]}>
                <p class={[styles.textIntroduction]}>
                    Hi there 🖐,
                    <br />
                    My name is <Span>ARAM WONDERGEM</Span>. I am a Full Stack Web Developer located
                    in <Span>New York City</Span> who thrives on engaging in projects that solve
                    real-world issues.
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
