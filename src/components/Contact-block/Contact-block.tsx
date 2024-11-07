import { component$ } from '@builder.io/qwik';
import { Heading } from '~/shared/components/Heading/Heading';
import styles from './Contact-block.module.css';
import { ExternalLink } from '~/shared/components/ButtonAndExternalLink/ExternalLink';

export interface ContactBlockProps {}

export const ContactBlock = component$<ContactBlockProps>(() => {
    return (
        <section id={'contact'} class={['outerbox', styles.outerboxContact, 'section']}>
            <Heading bgColor={'rose'} size={'big'}>
                <h2>CONTACT</h2>
            </Heading>
            <div class={['innerbox', styles.innerboxContact]}>
                <div class={styles.buttonWrapper}>
                    <ExternalLink url={'https://www.linkedin.com/in/aramwondergem/'}>
                        Connect with me on Linkedin
                    </ExternalLink>
                    <span class={[styles.spanButton]}>and</span>
                    <ExternalLink
                        url={'https://meet.risecalendar.com/aramwondergem/coffee-chat-website-aram'}
                    >
                        Schedule a coffee chat with me
                    </ExternalLink>
                </div>
            </div>
        </section>
    );
});
