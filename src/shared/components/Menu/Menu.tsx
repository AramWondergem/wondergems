import { component$, Signal } from '@builder.io/qwik';
import { Modal } from '@qwik-ui/headless';
import styles from './Menu.module.css';

export interface MenuProps {
    isOpen: Signal<boolean>;
}

export const Menu = component$<MenuProps>((props) => {
    return (
        <>
            <Modal.Root bind:show={props.isOpen}>
                <Modal.Panel class={[styles.menu]}>
                    <Modal.Title class={[styles.menuHeader]}>MENU</Modal.Title>
                    <ul>
                        <li>NavLink 1</li>
                        <li>NavLink 2</li>
                        <li>Navlink3</li>
                    </ul>

                    <footer>
                        <Modal.Close class='modal-close'>Cancel</Modal.Close>
                    </footer>
                </Modal.Panel>
            </Modal.Root>
        </>
    );
});
