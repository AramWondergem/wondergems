import { component$ } from '@builder.io/qwik';
import styles from './Work-experience.module.css';
import { Heading } from '~/shared/components/Heading/Heading';
import { Experience } from '~/components/About-block/model';

export interface ExperienceSectionProps {
    experience: Experience;
}

export const WorkExperience = component$<ExperienceSectionProps>((props) => {
    const { timePeriod, title, company, location, introduction, achievements }: Experience =
        props.experience;
    return (
        <div class={[styles.experienceWrapper]}>
            <div class={[styles.dateWrapper, 'hideOnMobile']}>
                <p class={[styles.date]}>{timePeriod}</p>
            </div>
            <div class={[styles.lineWrapper]}>
                <div class={[styles.circle]}></div>
                <div class={[styles.line]}></div>
            </div>
            <div class={[styles.textBlockWrapper]}>
                <div class={[styles.dateWrapper, 'hideOnDesktop']}>
                    <p class={[styles.date]}>{timePeriod}</p>
                </div>
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
                        <ul>
                            {achievements.map((achievement, index) => (
                                <li key={`achievement${index}from${timePeriod + company + title}`}>
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});
