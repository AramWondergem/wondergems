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
        <li>
            <span>{props.name}</span>

            <ul>
                {numberOfCheckedRounds.map((index) => (
                    <div
                        key={`checked${props.name + index}`}
                        class={[styles.checked, styles.levelIndicator]}
                    >
                        {index}
                    </div>
                ))}
                {numberOfUncheckedRounds.map((index) => (
                    <div key={`unchecked${props.name + index}`} class={[styles.levelIndicator]}>
                        {index}
                    </div>
                ))}
            </ul>
        </li>
    );
});
