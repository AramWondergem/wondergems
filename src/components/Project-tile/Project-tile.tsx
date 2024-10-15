import { $, component$ } from '@builder.io/qwik';
import { Button } from '~/components/Button/Button';
import { Heading } from '~/components/Heading/Heading';
import styles from './Project-tile.module.css';

export interface ProjectTileProps {}

export const ProjectTile = component$<ProjectTileProps>(() => {
    const onClick = $(() => alert('Hallo hier ben ik'));
    return (
        <li class={[styles.projectWrapper]}>
            <h3 class={[styles.projectHeader]}>AED CHECKER</h3>
            <div class={[styles.contentWrapper]}>
                <div class={[styles.textWrapper]}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque
                        eos fuga ipsa nostrum placeat quas quisquam reprehenderit temporibus
                        veritatis! Accusamus ad aperiam corporis dolorem expedita nam nostrum nulla
                        sunt!
                    </p>
                    <Heading bgColor={'yellow'} size={'small'}>
                        <h4>TASKS</h4>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aut
                        perspiciatis. Accusamus aliquid ducimus eveniet inventore laudantium sit
                        voluptatem. Deserunt earum enim esse fuga iusto optio quibusdam, tempora
                        tenetur voluptatum.
                    </p>
                    <Heading bgColor={'yellow'} size={'small'}>
                        <h4>TECHNOLOGIES</h4>
                    </Heading>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias
                        atque blanditiis culpa et mollitia nostrum tenetur vero! Adipisci dolore ex
                        fugit minima reprehenderit saepe, veritatis vitae? Facere, rem, voluptatum!
                    </p>
                    <div class={[styles.buttonWrapper]}>
                        <Button disabled={false} onClick={onClick}>
                            Website
                        </Button>
                        <Button disabled={false} onClick={onClick}>
                            Code base
                        </Button>
                    </div>
                </div>
                <div class={[styles.pictureWrapper]}>
                    <picture />
                </div>
            </div>
        </li>
    );
});
