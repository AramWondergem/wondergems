import { component$ } from '@builder.io/qwik';
import styles from './Project-block.module.css';
import { Heading } from '~/components/Heading/Heading';
import { ProjectTile } from '~/components/Project-tile/Project-tile';

export interface ProjectBlockProps {}

export const ProjectBlock = component$<ProjectBlockProps>(() => {
    return (
        <section class={['outerbox', 'flexgrow']}>
            <Heading class={[styles.header]} bgColor={'rose'}>
                <h2 class={[styles.headerText]}>PROJECTS</h2>
            </Heading>
            <div class={['innerbox', styles.innerBoxPage]}>
                <ProjectTile />
            </div>
        </section>
    );
});
