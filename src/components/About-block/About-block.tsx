import { component$ } from '@builder.io/qwik';
import { Heading } from '~/shared/components/Heading/Heading';
import styles from './About-block.module.css';
import aboutData from '~/assets/about-data.json';
import { AboutData } from '~/components/About-block/model';
import { SkillsSection } from '~/components/About-block/Skills-section/Skills-section';
import { WorkExperience } from '~/components/About-block/Experience-section/Work-experience';
import { ExternalLink } from '~/shared/components/ButtonAndExternalLink/ExternalLink';

export interface AboutBlockProps {}

export const AboutBlock = component$<AboutBlockProps>(() => {
    const data: AboutData = aboutData;

    return (
        <section id={'about'} class={['outerbox']}>
            <Heading bgColor={'rose'} size={'big'}>
                <h2>ABOUT</h2>
            </Heading>
            <div class={['innerbox', styles.innerboxAbout]}>
                <p>{data.introduction}</p>

                <Heading bgColor={'yellow'} size={'small'}>
                    <h3>SKILLS</h3>
                </Heading>
                {data.skillsSections.map((skillsSection, index) => (
                    <SkillsSection
                        key={`skillsSection${skillsSection.title + index}`}
                        title={skillsSection.title}
                        skills={skillsSection.skills}
                    />
                ))}
                <Heading bgColor={'yellow'} size={'small'}>
                    <h3 class={['hideOnMobile']}>WORK EXPERIENCE</h3>
                    <h3 class={['hideOnDesktop']}>EXPERIENCE</h3>
                </Heading>

                <div class={[styles.workExperienceWrapper]}>
                    <div>
                        {data.experiences.map((experience, index) => (
                            <WorkExperience experience={experience} key={`experience${index}`} />
                        ))}
                    </div>

                    <ExternalLink url={'https://www.linkedin.com/in/aramwondergem/'}>
                        See more work experience
                    </ExternalLink>
                </div>
            </div>
        </section>
    );
});
