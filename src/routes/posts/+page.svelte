<script lang=ts>
    export const prerender = true;

    import { light_mode, dark_mode, background } from '../store';

    let color = 'black';
    background.subscribe(value => {
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
    <title>safeer.tech | posts</title>
</head>

<section class="front" style="--font-color: {font_color};">
    <a href="https://youtube-dataviz.vercel.app/" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">YouTube DataViz</a>
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
        z-index: 1000;

        text-align: center;
        color: var(--font-color);
    }
    .stretch {
        margin-left: -8px;
        margin-right: -8px;
    }
    .bg {
        position: fixed;
        bottom: 5vh;
        right: 0vw;

        display: block;
        object-fit: cover;
        height: 90vh;
        width: 100vw;

        background-color: var(--theme-color);
        transition: background-color 0.3s;
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

            background-color: var(--theme-color);
            transition: background-color 0.3s;
        }
    }
</style>