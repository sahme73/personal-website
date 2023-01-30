<script lang=ts>
    export const prerender = true;
    
    import { light_mode, dark_mode, background, background0 } from './store';
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
            background0.set('#ffffff');
        } else if (dark) {
            color = '#202022';
            font_color = 'white';
            background.set(color);
            background0.set('#2f2f32');
        } else {
            color = 'white';
            font_color = 'black';
            background.set(color);
            background0.set(color);
        }
    }
</script>

<header style="--theme-color: {color}; --font-color: {font_color};">
    <nav class="center-text">
        <a href="/" class="menu" style="color: {font_color};">Home &emsp;</a>
        <a href="/posts" class="menu" style="color: {font_color};">Posts &emsp;</a>
        <a href="/about" class="menu" style="color: {font_color};">About &emsp;</a>
    
        <button class="btn-scaling" on:click={toggle}>
            toggle
        </button>
    </nav>
</header>

<slot></slot>

<footer class="bottom" style="--theme-color: {color}; --font-color: {font_color};">
    <p class="center-text">
        <a href="https://www.linkedin.com/in/safeer-ahmed-uiuc/" target="_blank" rel="noopener noreferrer" class="menu" style="color: {font_color};">LinkedIn &emsp;</a>
        <a href="https://www.github.com/sahme73/" target="_blank" rel="noopener noreferrer" class="menu" style="color: {font_color};">GitHub &emsp;</a>
        <a href="mailto:sahme73@illinois.edu" target="_blank" rel="noopener noreferrer" class="menu" style="color: {font_color};">Email</a>
    </p>
</footer>

<style>
    :root {
        --temp0: #FFF8F0;
        --temp00: #ffffff;
        --temp1: #202022;
        --temp11: #2f2f32;
        --theme-color0: {color};
    }
    .menu {
        text-decoration: none;
        opacity: 1.0;
        transition: 0.3s;
    }
    .menu:hover {
        opacity: 0.6;
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
        z-index: 1000;
    }
    header {
        position: fixed;
        width: 100%;
        height: 5%;
        bottom: 95%;
        right: 0%;
        background-color: var(--theme-color);
        transition: background-color 0.3s;
        font-size: 2vmin;
        color: var(--font-color);
        overflow: visible;
        z-index: 1000;
    }
    nav {
        margin: 6px; /* fallback */
        margin: 0.8vmin;
        overflow: visible;
    }
    p {
        margin: 6px; /* fallback */
        margin: 0.8vmin;
        font-size: 2vmin;
    }
    .btn-scaling {
        height: 3vmin;
        width: 14vmin;
        font-size: 2vmin;
    }
    @media screen and (max-width: 600px) {
        header {
            position: fixed;
            width: 100%;
            height: 8%;
            bottom: 92%;
            right: 0%;
            background-color: var(--theme-color);
            transition: background-color 0.3s;
            font-size: 11pt;
            color: var(--font-color);
            z-index: 1000;
        }
        nav {
            margin-top: 16px;
        }
        .btn-scaling {
            height: 3%;
            width: 14%;
            font-size: 8pt;
            overflow: visible;
        }
        .bottom {
            position: fixed;
            bottom: 0%;
            right: 0%;
            width: 100%;
            height: 8%;
            background-color: var(--theme-color);
            transition: background-color 0.3s;
            color: var(--font-color);
            z-index: 1000;
        }
        p {
            margin-top: 16px;
            font-size: 11pt;
        }
    }
    /* add the 5 device rule from w3 */
</style>