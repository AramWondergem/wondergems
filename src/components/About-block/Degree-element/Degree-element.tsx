import { component$ } from '@builder.io/qwik';
import styles from './Degree-element.module.css';
import type { Degree } from '~/components/About-block/model';

export interface DegreeProps {
    degree: Degree;
}

export const DegreeElement = component$<DegreeProps>((props) => {
    const { university, degreeType, name, description } = props.degree;
    return (
        <>
            <div class={[styles.titleAndUnderlineWrapper]}>
                <div class={[styles.titleWrapper]}>
                    <div class={[styles.titleBox]}>
                        <h4 class={[styles.title]}>{name}</h4>
                    </div>
                </div>
                <p>
                    <em>{degreeType},</em> {university}
                </p>
            </div>
            {description.length > 0 && (
                <ul class={[styles.ulDegree]}>
                    {description.map((bulletPoint, index) => (
                        <li key={`bulletpoint${name + university + degreeType + index}`}>
                            {bulletPoint}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
});
