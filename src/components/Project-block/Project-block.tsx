import { component$ } from '@builder.io/qwik';
import styles from './Project-block.module.css';
import { Heading } from '~/shared/components/Heading/Heading';
import { ProjectTile } from '~/components/Project-block/Project-tile/Project-tile';
import projectData from '~/assets/project-data.json';
import { ProjectData } from '~/components/Project-block/model';

export interface ProjectBlockProps {}

export const ProjectBlock = component$<ProjectBlockProps>(() => {
    const projects: ProjectData[] = projectData.projects;
    return (
        <section id={'projects'} class={['outerbox']}>
            <Heading bgColor={'rose'} size={'big'}>
                <h2>PROJECTS</h2>
            </Heading>
            <ul class={['innerbox', styles.innerBoxPage]}>
                {projects.map((data, index) => (
                    <ProjectTile data={data} key={`projectTile${index}`} />
                ))}
            </ul>
        </section>
    );
});
