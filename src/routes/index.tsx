import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HomeBlock } from '~/components/Home-block/Home-block';
import { ProjectBlock } from '~/components/Project-block/Project-block';
import { AboutBlock } from '~/components/About-block/About-block';
import { ContactBlock } from '~/components/Contact-block/Contact-block';

export default component$(() => {
    return (
        <div class={['outerbox']}>
            <HomeBlock />
            <ProjectBlock />
            <AboutBlock />
            <ContactBlock />
        </div>
    );
});

export const head: DocumentHead = {
    title: 'Wondergems | portfolio website of Aram Wondergem',
    meta: [
        {
            name: 'description',
            content: 'Get to know the work and the skills of Aram Wondergem'
        },
        {
            name: 'og:image:url',
            content: 'https://wondergems.dev/images/AED-Project-in-frame.webp'
        },
        {
            name: 'og:image:secure_url',
            content: 'https://wondergems.dev/images/AED-Project-in-frame.webp'
        },
        {
            name: 'og:image:type',
            content: 'image/webp'
        },
        {
            name: 'og:image:width',
            content: '1200'
        },
        {
            name: 'og:image:height',
            content: '627'
        },
        {
            name: 'og:image:alt',
            content:
                'Three blocks above each other containing the name Aram Wondergem, the job title Web Developer and the slogan building user-friendly web apps'
        },
        {
            name: 'og:locale',
            content: 'en-US'
        },
        {
            name: 'og:title',
            content: 'Wondergems | Portfolio Website of Aram Wondergem'
        },
        {
            name: 'og:description',
            content: 'Get to know the work and the skills of Aram Wondergem'
        },
        {
            name: 'og:type',
            content: 'website'
        },
        {
            name: 'og:url',
            content: 'https://wondergems.dev'
        }
    ]
};
