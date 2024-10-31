import { component$ } from '@builder.io/qwik';
import styles from './Work-experience.module.css';
import { Heading } from '~/shared/components/Heading/Heading';

export interface ExperienceSectionProps {}

export const WorkExperience = component$<ExperienceSectionProps>(() => {
    return (
        <div class={[styles.experienceWrapper]}>
            <div class={[styles.lineWrapper]}>
                <div class={[styles.circle]}></div>
                <div class={[styles.line]}></div>
            </div>
            <div class={[styles.textBlockWrapper]}>
                <p class={[styles.date]}>09/2023 - Present</p>
                <div class={[styles.titleAndCompanyWrapper]}>
                    <div class={[styles.titleWrapper]}>
                        <h4 class={[styles.title]}>Full Stack Web Developer</h4>
                    </div>
                    <p>
                        <em>Trailblazers,</em> Amsterdam
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
                    architecto aut commodi cupiditate dolor dolore dolorum eligendi ex id impedit
                    labore libero natus nemo, pariatur possimus totam voluptate voluptatibus.
                </p>
                <div>
                    <Heading bgColor={'rose'} size={'small'}>
                        <h5>ACHIEVEMENTS</h5>
                    </Heading>
                    <ul>
                        <li>
                            Developed a web application for managing the maintenance of automated
                            external defibrillators (AEDs) increasing the rate of AEDs checked
                            monthly by 55% and reducing AED downtime by 45%.
                        </li>
                        <li>
                            Redesigned user interfaces for both desktop and mobile in Figma, and
                            developed them using Angular, resulting in high user adoption and strong
                            initial user satisfaction.
                        </li>
                        <li>
                            Implemented new features in the Angular application and the RESTful API
                            built with Spring Boot, which led to partnering with a major AED
                            retailer for the development of the application.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
});
