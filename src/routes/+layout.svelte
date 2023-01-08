<script>
    export const prerender = true;
    
    import { light_mode, dark_mode, background } from './store';
    let light = false;
    let dark = false;

    light_mode.subscribe(value => {
        light = value;
    });
    dark_mode.subscribe(value => {
        dark = value;
    });

    function toggle() {
		light_mode.set(!light);
        dark_mode.set(!dark);
	}

    $: color = '';
    $: font_color = '';
    $: {
        if (light) {
            color = '#FFF8F0';
            font_color = 'black';
            background.set(color);
        } else if (dark) {
            color = '#202022';
            font_color = 'white';
            background.set(color);
        } else {
            color = 'white';
            font_color = 'black';
            background.set(color);
        }
    }
</script>

<header style="--theme-color: {color}; --font-color: {font_color};">
    <nav class="center-text">
        <a href="/">Home</a>
        <a href="/about">About</a>
    
        <button class="btn-scaling" on:click={toggle}>
            toggle
        </button>
    </nav>
</header>

<slot></slot>

<footer class="bottom" style="--theme-color: {color}; --font-color: {font_color};">
    <p class="center-text">
        Connect: <a href="https://www.linkedin.com/in/safeer-ahmed-uiuc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         | <a href="https://www.github.com/sahme73/" target="_blank" rel="noopener noreferrer">GitHub</a>
         | <a href="mailto:sahme73@illinois.edu" target="_blank" rel="noopener noreferrer">Email</a>
    </p>
</footer>

<style>
    :root {
        --temp0: #FFF8F0;
        --temp1: #202022;
        --theme-color0: {color};
    }
    .bottom {
        position: fixed;
        bottom: 0vh;
        right: 0vw;
        width: 100vw;
        height: 5vh;
        background-color: var(--theme-color);
        transition: background-color 0.3s;
        color: var(--font-color);
    }
    header {
        position: fixed;
        width: 100vw;
        height: 5vh;
        bottom: 95vh;
        right: 0vw;
        background-color: var(--theme-color);
        transition: background-color 0.3s;
        font-size: 2vmin;
        color: var(--font-color);
    }
    @media screen and (max-width: 600px) {
        header {
            position: fixed;
            width: 100%;
            height: 10%;
            bottom: 65%;
            right: 0%;
            background-color: var(--theme-color);
            transition: background-color 0.3s;
            font-size: 2vmin;
            color: var(--font-color);
        }
    }
    nav {
        margin: 6px; /* fallback */
        margin: 0.8vmin;
    }
    @media screen and (max-width: 600px) {
        nav {
            margin: 6px; /* fallback */
            margin: 8%;
        }
    }
    p {
        margin: 6px; /* fallback */
        margin: 0.8vmin;
        font-size: 2vmin;
    }
    .btn-scaling {
        height: 3vmin;
        width: 8vmin;
        font-size: 2vmin;
    }
</style>