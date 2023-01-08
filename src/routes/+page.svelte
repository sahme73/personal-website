<script lang="ts">
    export const prerender = true;

    import { light_mode, dark_mode } from './store';
    let name = 'safeer';
    let light = false;
    let dark = false;
    let src = '';

    light_mode.subscribe(value => {
        light = value;
    });
    dark_mode.subscribe(value => {
        dark = value;
    });

    $: {
		if (light)
			src = '/images/homepage_day_v2.png';
		else if (dark)
		  	src = '/images/homepage_night_v2.png';
	}
</script>

<head>
    <title>safeer.tech | home</title>
</head>

<section class="stretch">
    <img {src} class="main-image" alt="Chicago during the day/night depending on website theme chosen.">
    <h1 class="center-text main-header">{name}.tech</h1>
</section>

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
    }
</style>