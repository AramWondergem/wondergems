import { component$ } from '@builder.io/qwik';
import styles from './Project-block.module.css';
import { Heading } from '~/components/Heading/Heading';

export interface ProjectBlockProps {}

export const ProjectBlock = component$<ProjectBlockProps>(() => {
    return (
        <section class={['outerbox', 'flexgrow']}>
            <Heading class={[styles.header]} bgColor={'rose'}>
                Hallo
            </Heading>
            <div class={['innerbox', styles.innerBoxPage]}></div>
        </section>
    );
});
