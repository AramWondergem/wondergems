import { $, component$ } from '@builder.io/qwik';
import { Button } from '~/components/Button/Button';
import { Heading } from '~/components/Heading/Heading';
import styles from './Project-tile.module.css';

export enum ImageType {
    MOBILE = 'MOBILE',
    DESKTOP = 'DESKTOP'
}

export interface ProjectImage {
    type: ImageType;
    url: string;
    alt: string;
}

export interface ProjectButton {
    label: string;
    url: string;
}

export interface ProjectData {
    title: string;
    images: ProjectImage[];
    description: string;
    tasks: string[];
    technologies: string;
    buttons: ProjectButton[];
}

export interface ProjectTileProps {
    data: ProjectData;
}

export const ProjectTile = component$<ProjectTileProps>((props) => {
    const { title, images, description, tasks, technologies, buttons }: ProjectData = props.data;

    const openInNewTab = $((url: string) => {
        window.open(url, '_blank');
    });

    return (
        <li class={[styles.projectWrapper]}>
            <h3 class={[styles.projectHeader]}>{title}</h3>
            <div class={[styles.contentWrapper]}>
                <picture class={[styles.pictureWrapper]}>
                    {images.map((image, index) => (
                        <source
                            key={`projectPicture${index}`}
                            srcset={image.url}
                            media={
                                image.type === 'MOBILE'
                                    ? '(max-width: 599px)'
                                    : '(min-width: 600px)'
                            }
                        />
                    ))}
                    {images
                        .filter((image) => image.type === ImageType.DESKTOP)
                        .map((image) => (
                            <img width={'100%'} height={'100%'} src={image.url} alt={image.alt} />
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
                        {buttons.map((button) => (
                            <Button disabled={false} onClick={$(() => openInNewTab(button.url))}>
                                {button.label}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
});
