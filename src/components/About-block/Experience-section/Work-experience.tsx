import { component$ } from '@builder.io/qwik';
import styles from './Work-experience.module.css';

export interface ExperienceSectionProps {}

export const WorkExperience = component$<ExperienceSectionProps>(() => {
    return (
        <div class={[styles.experienceWrapper]}>
            <div class={[styles.lineWrapper]}>
                <div class={[styles.circle]}></div>
                <div class={[styles.line]}></div>
            </div>
            <div class={[styles.textBlockWrapper]}>experience</div>
        </div>
    );
});
