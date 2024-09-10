import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Heading } from '~/components/Heading/Heading';
import styles from './Index.module.css';
import { Introduction } from '~/components/Introduction/Introduction';

export default component$(() => {
    return (
        <div class={['flexgrow', 'outerbox', styles.outerboxPage]}>
            <Introduction />
            <Heading bgColor={'rose'}>
                <h2>ABOUT</h2>
            </Heading>
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description'
        }
    ]
};
