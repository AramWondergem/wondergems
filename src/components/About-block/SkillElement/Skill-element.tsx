import { component$ } from '@builder.io/qwik';
import styles from './Skill-element.module.css';

export interface SkillProps {
    name: string;
    level: number;
}

export const SkillElement = component$<SkillProps>((props) => {
    const numberOfCheckedRounds: number[] = [];
    const numberOfUncheckedRounds: number[] = [];

    for (let i = 0; i < 5; i++) {
        if (i < props.level) {
            numberOfCheckedRounds.push(i);
        } else {
            numberOfUncheckedRounds.push(i);
        }
    }
    return (
        <li class={[styles.nameAndLevelWrapper]}>
            <h5>{props.name}</h5>

            <ul class={[styles.levelWrapper]}>
                {numberOfCheckedRounds.map((index) => (
                    <li
                        key={`checked${props.name + index}`}
                        class={[styles.checked, styles.levelIndicator]}
                    ></li>
                ))}
                {numberOfUncheckedRounds.map((index) => (
                    <li key={`unchecked${props.name + index}`} class={[styles.levelIndicator]}></li>
                ))}
            </ul>
        </li>
    );
});
