<script>
    export const prerender = true;

    import FooterComponent from './footer_component.svelte';

    let name = 'Safeer Ahmed';
</script>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<h1>Welcome to {name}'s Incomplete Website!</h1>

<slot></slot>

<FooterComponent/>