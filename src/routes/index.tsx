import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {Heading} from "~/components/Heading/Heading";


export default component$(() => {
    return (
        <div class={'flexgrow'}>
            <Heading  bgColor={'rose'}>
                <h2>ABOUT</h2>
            </Heading>
            <Heading  bgColor={'rose'}>
                <h3>TECHNOLOGY</h3>
            </Heading>
            <Heading  bgColor={'rose'}>
                <h4>ABOUT</h4>
            </Heading>
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
