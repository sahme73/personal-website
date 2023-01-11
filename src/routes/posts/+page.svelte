<script>
    export const prerender = true;

    import { background } from '../store';

    let color = 'black';
    background.subscribe(value => {
        color = value;
    });
</script>

<head>
    <title>safeer.tech | posts</title>
</head>

<section class="stretch">
    <div class="bg" style="--theme-color: {color}" />
</section>

<style>
    /* Styles will be moved to a library managed by sass in future patches. */

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
    @media screen and (max-width: 600px) {
        .bg {
            position: fixed;
            bottom: 8%;
            right: 0%;

            display: block;
            object-fit: cover;
            height: 84%;
            width: 100%;

            background-color: var(--theme-color);
            transition: background-color 0.3s;
        }
    }
</style>