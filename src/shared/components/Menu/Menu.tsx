import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Modal } from '@qwik-ui/headless';
import styles from './Menu.module.css';
import { NavLinks } from '~/shared/components/NavLinks/NavLinks';
import { MoClose } from '@qwikest/icons/monoicons';

export interface MenuProps {
    isOpen: Signal<boolean>;
}

/*added div because otherwise the display:flex would interfere with opening and closing the menu*/
export const Menu = component$<MenuProps>((props) => {
    return (
        <>
            <Modal.Root bind:show={props.isOpen}>
                <Modal.Panel class={[styles.menu]}>
                    <div class={[styles.menuContentWrapper]}>
                        <button
                            class={[styles.closeButtonWrapper]}
                            onClick$={() => (props.isOpen.value = false)}
                        >
                            <MoClose class={[styles.closeButton]} />
                        </button>
                        <NavLinks
                            flexDirection={'column'}
                            onClick$={() => (props.isOpen.value = false)}
                        />
                    </div>
                </Modal.Panel>
            </Modal.Root>
        </>
    );
});
