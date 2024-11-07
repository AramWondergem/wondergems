import { component$ } from '@builder.io/qwik';
import styles from './Work-experience.module.css';
import { Heading } from '~/shared/components/Heading/Heading';
import { Experience } from '~/components/About-block/model';

export interface ExperienceSectionProps {
    experience: Experience;
}

export const WorkExperience = component$<ExperienceSectionProps>((props) => {
    const { title, company, location, introduction, achievements }: Experience = props.experience;
    return (
        <>
            <div class={[styles.titleAndCompanyWrapper]}>
                <div class={[styles.titleWrapper]}>
                    <div class={[styles.titleBox]}>
                        <h4 class={[styles.title]}>{title}</h4>
                    </div>
                </div>
                <p>
                    <em>{company},</em> {location}
                </p>
            </div>
            <p class={[styles.introduction]}>{introduction}</p>
            <div>
                <Heading bgColor={'rose'} size={'small'}>
                    <h5>ACHIEVEMENTS</h5>
                </Heading>
                <div>
                    <ul class={[styles.ulExperience]}>
                        {achievements.map((achievement, index) => (
                            <li key={`achievement${index}from${company + title}`}>{achievement}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
});
