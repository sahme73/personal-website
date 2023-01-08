<script>
    export const prerender = true;
    
    import { light_mode, dark_mode } from './store';
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
        } else if (dark) {
            color = '#575761';
        } else {
            color = 'white';
        }
    }
</script>

<header style="--theme-color: {color}">
    <nav class="center-text">
        <a href="/">Home</a>
        <a href="/about">About</a>
    
        <button on:click={toggle}>
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
    .bottom {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 5%;
        background-color: var(--theme-color);
    }
    header {
        position: absolute;
        width: 100%;
        height: 5%;
        bottom: 95%;
        right: 0;
        background-color: var(--theme-color);
    }
    nav {
        margin: 0;
    }
    p {
        margin: 0;
    }
</style>