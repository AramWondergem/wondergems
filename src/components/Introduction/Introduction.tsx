import { $, component$ } from '@builder.io/qwik';
import styles from './Introduction.module.css';
import { Button } from '~/components/Button/Button';
import { Span } from '~/components/Span/Span';

export interface IntroductionProps {}

export const Introduction = component$<IntroductionProps>(() => {
    const onClick = $(() => alert('Hallo hier ben ik'));
    return (
        <section class={['innerbox', styles.innerBoxPage]}>
            <p>
                Hi there, My name is{' '}
                <Span size={'big'} display={'block'}>
                    ARAM WONDERGEM
                </Span>
                <span class={[styles.hideOnDesktopAndTablet]}>.</span> I am a Full Stack Developer
                located in <Span>New York City</Span> who thrives on engaging in projects that solve
                real-world issues.
            </p>

            <Button onClick={onClick}>See my projects</Button>
        </section>
    );
});
