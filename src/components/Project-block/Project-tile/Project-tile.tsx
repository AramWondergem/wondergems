import { component$ } from '@builder.io/qwik';
import { Heading } from '~/shared/components/Heading/Heading';
import styles from './Project-tile.module.css';
import type { ProjectData } from '~/components/Project-block/model';
import { LinkButton } from '~/shared/components/ButtonAndExternalLink/LinkButton';

export interface ProjectTileProps {
    data: ProjectData;
}

export const ProjectTile = component$<ProjectTileProps>((props) => {
    const { title, images, description, tasks, technologies, buttons }: ProjectData = props.data;

    return (
        <li class={[styles.projectWrapper]}>
            <h3 class={[styles.projectHeader]}>{title}</h3>
            <div class={[styles.contentWrapper]}>
                <picture class={[styles.pictureWrapper]}>
                    {images.map((image, index) => (
                        <source
                            key={`projectPicture${index}`}
                            srcset={image.url}
                            media={image.type === 0 ? '(max-width: 599px)' : '(min-width: 600px)'}
                        />
                    ))}
                    {images
                        .filter((image) => image.type === 1)
                        .map((image) => (
                            <img key={`defaultPicture${title}`} src={image.url} alt={image.alt} />
                        ))}
                </picture>
                <div class={[styles.textWrapper]}>
                    <p>{description}</p>
                    <Heading bgColor={'yellow'} size={'small'}>
                        <h4>TASKS</h4>
                    </Heading>
                    <ul class={[styles.listItemsProject]}>
                        {tasks.map((task, index) => (
                            <li key={`taskProject${title + index}`}>{task}</li>
                        ))}
                    </ul>
                    <Heading bgColor={'yellow'} size={'small'}>
                        <h4>TECHNOLOGIES</h4>
                    </Heading>
                    <p>{technologies}</p>
                    <div class={[styles.buttonWrapper]}>
                        {buttons.map((button, index) => (
                            <LinkButton
                                key={`${index}button${title}`}
                                url={button.url}
                                target={'_blank'}
                            >
                                {button.label}
                            </LinkButton>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
});
