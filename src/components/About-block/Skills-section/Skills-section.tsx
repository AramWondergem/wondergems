import { component$ } from '@builder.io/qwik';
import { Heading } from '~/shared/components/Heading/Heading';
import styles from './Skills-section.module.css';
import { Skill } from '~/components/About-block/model';
import { SkillElement } from '~/components/About-block/SkillElement/Skill-element';

export interface SkillsSectionProps {
    title: string;
    skills: Skill[];
}

export const SkillsSection = component$<SkillsSectionProps>((props) => {
    return (
        <div class={[styles.skillsListWrapper]}>
            <Heading bgColor={'rose'} size={'small'}>
                <h4>{props.title}</h4>
            </Heading>
            <ul>
                {props.skills.map((skill, index) => (
                    <SkillElement
                        key={`${props.title + skill.name + skill.level + index}`}
                        name={skill.name}
                        level={skill.level}
                    />
                ))}
            </ul>
        </div>
    );
});
