import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Introduction } from '~/components/Introduction/Introduction';
import { ProjectBlock } from '~/components/Project-block/Project-block';

export default component$(() => {
    return (
        <div class={['outerbox']}>
            <Introduction />
            <ProjectBlock />
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
