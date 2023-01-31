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
    <title>safeer.tech | posts</title>
</head>

<section class="front" style="--font-color: {font_color};">
    <h1>Projects</h1>
    <a href="https://youtube-dataviz.vercel.app/" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">YouTube DataViz</a><br>
    <a href="https://github.com/sahme73/bitcoin-analysis" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">Bitcoin Alpha Analysis</a><br>
    <a href="https://github.com/sahme73/ForestForever" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">Forest Forever</a><br>
    <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/ahmed174_purdue_edu/EU_R3fGU4zhFjmeMfrgYNFMBsyWvczX2KTkAOrMe_7eAgw?rtime=fjmBznsC20g" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">Enzyme Model Algorithm</a><br>
    <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/ahmed174_purdue_edu/Ea535KiW1q1OqIm11OHPQq0BHA4h5IocG4AZbjAD0JCrtA?e=JzeSBi" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">
        Martian Parachute Prototype</a><br>
    <a href="https://purdue0-my.sharepoint.com/:w:/g/personal/aglime_purdue_edu/ETkklwmRliVOoIHkFLUv1egBySllI9T9biuEOiNmeSPeyA?e=D9W0Ua" target="_blank" rel="noopener noreferrer" class="obj" style="color: {font_color};">
        Remote Skateboard Blinkers Prototype</a><br>
    <br>
    <h1>Papers</h1>
    <p class="obj" style="color: {font_color};">Coming soon...</p><br>
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
        bottom: 5vh;
        right: 0vw;

        display: block;
        object-fit: cover;
        height: 90vh;
        width: 100vw;
        z-index: 500;

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
            z-index: 500;

            background-color: var(--theme-color);
            transition: background-color 0.3s;
        }
        .front {
            z-index: 501;
        }
    }
</style>