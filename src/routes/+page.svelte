<script>
    export const prerender = false;

    import Component1 from './components/component1.svelte';
    import Component2 from './components/cat_image.svelte';
    import ResumeComponent from './components/resume_component.svelte';
    import FooterComponent from './components/footer_component.svelte';

    let name = 'Safeer Ahmed';
</script>

<h1>Welcome to {name}'s Incomplete Website!</h1>

<ResumeComponent/>
<br><br>
<Component1/>
<Component2/>
<FooterComponent/>