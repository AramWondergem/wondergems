import { component$ } from '@builder.io/qwik';
import { Heading } from '~/shared/components/Heading/Heading';
import styles from './Contact-block.module.css';
import { LinkButton } from '~/shared/components/ButtonAndExternalLink/LinkButton';

export interface ContactBlockProps {}

export const ContactBlock = component$<ContactBlockProps>(() => {
    return (
        <section id={'contact'} class={['outerbox', styles.outerboxContact, 'section']}>
            <Heading bgColor={'rose'} size={'big'}>
                <h2>CONTACT</h2>
            </Heading>
            <div class={['innerbox', styles.innerboxContact]}>
                <div class={styles.buttonWrapper}>
                    <LinkButton
                        url={'https://www.linkedin.com/in/aramwondergem/'}
                        target={'_blank'}
                    >
                        Connect with me on Linkedin
                    </LinkButton>
                    <span class={[styles.spanButton]}>and</span>
                    <LinkButton
                        url={'https://meet.risecalendar.com/aramwondergem/coffee-chat-website-aram'}
                        target={'_blank'}
                    >
                        Schedule a coffee chat with me
                    </LinkButton>
                </div>
            </div>
        </section>
    );
});
