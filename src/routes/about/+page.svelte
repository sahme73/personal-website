<script>
    export const prerender = true;

    import ResumeComponent from './resume_component.svelte';

    import { background } from '../store';

    let color = 'black';
    background.subscribe(value => {
        color = value;
    });
</script>

<head>
    <title>safeer.tech | about</title>
</head>

<section class="stretch">
    <div class="bg" style="--theme-color: {color}" />
    <ResumeComponent/>
</section>

<style>
    .stretch {
        margin-left: -8px;
        margin-right: -8px;
    }
    .bg {
        position: fixed;
        bottom: 5vh;
        right: 0vw;

        display: block;
        object-fit: cover;
        height: 90vh;
        width: 100vw;

        background-color: var(--theme-color);
        transition: background-color 0.3s;
    }
</style>