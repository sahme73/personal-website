<script lang=ts>
    export const prerender = true;

    import { light_mode, dark_mode, background0 } from '../store';

    let color = 'black';
    background0.subscribe(value => {
        color = value;
    });

    let light = false;
    let dark = false;

    light_mode.subscribe(value => {
        light = value;
    });
    dark_mode.subscribe(value => {
        dark = value;
    });
    $: font_color = '';
    $: {
        if (light) {
            font_color = 'black';
        } else if (dark) {
            font_color = 'white';
        }
    }
</script>

<head>
    <title>safeer.tech | papers</title>
</head>

<section class="front" style="--font-color: {font_color};">
    <h1>Papers</h1>
    <a href="./files/paper-1.pdf" download="safeer-ahmed-paper-1" class="obj" style="color: {font_color};">Ethics of a Virtual Reality Future: Dominated by Corporations - 11 pages</a><br>
    <a href="./files/paper-2.pdf" download="safeer-ahmed-paper-2" class="obj" style="color: {font_color};">Containing Digital Scalpers - 11 pages</a><br>
    <a href="./files/paper-3.pdf" download="safeer-ahmed-paper-3" class="obj" style="color: {font_color};">Software Ownership: A Natural Right or Not? - 5 pages</a><br>
    <a href="./files/paper-4.pdf" download="safeer-ahmed-paper-4" class="obj" style="color: {font_color};">Trog Argument's Flaw - 5 pages</a><br>
    <a href="./files/paper-5.pdf" download="safeer-ahmed-paper-5" class="obj" style="color: {font_color};">Short Essays on Minds and Machines - 11 pages</a><br>
    <a href="./files/paper-6.pdf" download="safeer-ahmed-paper-6" class="obj" style="color: {font_color};">Relationship of Nonself and Karma - 3 pages</a><br>
    <a href="./files/paper-7.pdf" download="safeer-ahmed-paper-7" class="obj" style="color: {font_color};">Argument Against Language (Linguistics in Mathematics) - 6 pages</a><br>
    <a href="./files/paper-8.pdf" download="safeer-ahmed-paper-8" class="obj" style="color: {font_color};">Human Isolation and Consequential Suffering - 14 pages</a><br>
    <p class="obj" style="color: {font_color};">More coming soon...</p>
</section>

<section class="stretch">
    <div class="bg" style="--theme-color: {color}" />
</section>

<style>
    /* Styles will be moved to a library managed by sass in future patches. */
    .obj {
        text-decoration: none;
        opacity: 1.0;
        transition: 0.3s;
    }
    .obj:hover {
        opacity: 0.6;
    }
    .front {
        position: relative;
        top: 64px;
        z-index: 501;

        text-align: center;
        color: var(--font-color);
    }
    .stretch {
        margin-left: -8px;
        margin-right: -8px;
    }
    .bg {
        position: fixed;
        bottom: 0vh;
        right: 0vw;

        display: block;
        object-fit: cover;
        height: 100vh;
        width: 100vw;
        z-index: 500;

        background-color: var(--theme-color);
        transition: background-color 0.3s;
        transform: translate3d(0, 0, 0);
    }
    @media screen and (max-width: 600px) {
        .bg {
            position: fixed;
            bottom: 8%;
            right: 0%;

            display: block;
            object-fit: cover;
            height: 84%;
            width: 100%;
            z-index: 500;

            background-color: var(--theme-color);
            transition: background-color 0.3s;
            transform: translate3d(0, 0, 0);
        }
        .front {
            z-index: 501;
        }
    }
</style>