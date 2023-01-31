<script lang="ts">
    export const prerender = true;

    import { light_mode, dark_mode } from './store';
    let name = 'safeer';
    let light = false;
    let dark = false;

    light_mode.subscribe(value => {
        light = value;
    });
    dark_mode.subscribe(value => {
        dark = value;
    });
</script>

<head>
    <title>safeer.tech | home</title>

    <meta name = "safeer.tech" content="Safeer Ahmed's personal website.">
</head>

{#if light}
    <section class="stretch fade-in">
        <img src="/images/homepage_day_v2.png" class="main-image" alt="Chicago during the day.">
        <h1 class="center-text main-header">{name}.tech</h1>
    </section>
{/if}

{#if dark}
    <section class="stretch fade-in">
        <img src="/images/homepage_night_v2.png" class="main-image" alt="Chicago during the night.">
        <h1 class="center-text main-header">{name}.tech</h1>
    </section>
{/if}

<style>
    .stretch {
        margin-left: -8px;
        margin-right: -8px;
    }
    .main-header {
        background-color: transparent;
        position: fixed;
        bottom: 15vh;
        right: 15vw;
        color: aliceblue;
        font-size: 5vmin;
    }
    .main-image {
        position: fixed;
        bottom: 5vh;
        right: 0vw;

        display: block;
        object-fit: cover;
        height: 90vh;
        width: 100vw;
    }
    .fade-in {
        animation: fadeIn ease 0.3s;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @media screen and (max-width: 600px) {
        .main-image {
            position: absolute;
            bottom: 8%;
            right: 0%;

            display: block;
            object-fit: cover;
            height: 84%;
            width: 100%;

            z-index: 1;
        }
        .main-header {
            background-color: transparent;
            position: fixed;
            bottom: 15vh;
            right: 15vw;
            color: aliceblue;
            font-size: 5vmin;

            z-index: 100;
        }
    }
</style>