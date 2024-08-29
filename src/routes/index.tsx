import {component$, $} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {Heading} from "~/components/Heading/Heading";
import {Button} from "~/components/Button/Button";
import {Span} from "~/components/Span/Span"
import styles from "./Index.module.css"


export default component$(() => {
    const onClick = $(() => alert('Hallo hier ben ik'));

    return (
        <div class={['flexgrow', 'outerbox', styles.outerboxPage]}>
            <Heading bgColor={'rose'}>
                <h2>ABOUT</h2>
            </Heading>
            <div class={['innerbox', styles.innerBoxPage]}>

                <Heading bgColor={'rose'}>
                    <h3>TECHNOLOGY</h3>
                </Heading>
                <Heading bgColor={'rose'}>
                    <h4>ABOUT</h4>
                </Heading>

                <Button onClick={onClick}>See my projects</Button>
                <p>Hi there, My name is <Span size={1000} display={'block'}>ARAM WONDERGEM</Span><span class={[styles.hideOnDesktopAndTablet]}>.</span> I am a Full Stack Developer located in <Span>New York City</Span> who thrives on engaging in projects that solve real-world issues.


                </p>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
