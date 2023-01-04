<script>
    export const prerender = true;

    import FooterComponent from './footer_component.svelte';

    let name = 'Safeer Ahmed';
</script>

<nav style="text-align:center">
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<h1 class="center">Welcome to {name}'s Incomplete Website!</h1>

<slot></slot>

<FooterComponent/>

<style>
    .center {
        text-align: center;
    }
</style>