<script>
    import Component1 from './temp/component1.svelte';
    import Component2 from './temp/component2.svelte';
    let name = 'Safeer Ahmed';
</script>

<h1>Welcome to {name}'s Website!</h1>

<p>
    This website is powered by the latest version SvelteKit!<br>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read documentation about this website's framework.
</p>

<Component1/>
<Component2/>