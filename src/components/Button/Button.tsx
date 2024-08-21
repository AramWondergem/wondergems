import type { PropFunction, QRL} from '@builder.io/qwik';
import {component$, Slot} from '@builder.io/qwik';
import styles from './Button.module.css'

export interface ButtonProps {
onClick: PropFunction<QRL<() => void>>;
disabled: boolean
}

export const Button = component$<ButtonProps>((props) => {
  return (
      <button class={[styles.button]} onClick$={() => props.onClick()} disabled={props.disabled}>
          <Slot/>
      </button>
  );
});
