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
    $: {
        if (light) {
            color = '#FFF8F0';
            background.set(color);
        } else if (dark) {
            color = '#575761';
            background.set(color);
        } else {
            color = 'white';
            background.set(color);
        }
    }
</script>

<header style="--theme-color: {color}">
    <nav class="center-text">
        <a href="/">Home</a>
        <a href="/about">About</a>
    
        <button class="btn-scaling" on:click={toggle}>
            toggle
        </button>
    </nav>
</header>

<slot></slot>

<footer class="bottom" style="--theme-color: {color}">
    <p class="center-text">
        Connect: <a href="https://www.linkedin.com/in/safeer-ahmed-uiuc/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         | <a href="https://www.github.com/sahme73/" target="_blank" rel="noopener noreferrer">GitHub</a>
    </p>
</footer>

<style>
    :root {
        --temp0: #FFF8F0;
        --temp1: #575761;
    }
    .bottom {
        position: fixed;
        bottom: 0vh;
        right: 0vw;
        width: 100vw;
        height: 5vh;
        background-color: var(--theme-color);
        transition: background-color 0.3s;
    }
    header {
        position: absolute;
        width: 100vw;
        height: 5vh;
        bottom: 95vh;
        right: 0vw;
        background-color: var(--theme-color);
        transition: background-color 0.3s;
        font-size: 2vmin;
    }
    nav {
        margin: 6px; /* fallback */
        margin: 0.8vmin;
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