<script lang=ts>
    export const prerender = true;

    import ResumeComponent from './resume_component.svelte';

    import { light_mode, dark_mode, background } from '../store';

    let color = 'black';
    background.subscribe(value => {
        color = value;
    });

    let light = false;
    let dark = false;

    light_mode.subscribe(value => {
        light = value;
    });
    dark_mode.subscribe(value => {
        dark = value;
    });
    $: font_color = '';
    $: {
        if (light) {
            font_color = 'black';
        } else if (dark) {
            font_color = 'white';
        }
    }
</script>

<head>
    <title>safeer.tech | about</title>
</head>

<section class="stretch">
    <div class="bg" style="--theme-color: {color};" />
    <ResumeComponent/>
</section>

<section class="front" style="--font-color: {font_color};">
    <h1>Bio</h1>
    <br/>
    <p>(img)</p>
    <br/>
    <p>Name: Safeer Ahmed</p>
    <br/>
    <p>
        Education:
        <br> University of Illinois at Urbana-Champaign
        <br> June 2021 - May 2023
        <br> Bachelor of Sciences in Liberal Arts & Sciences
        <br> Major in Computer Science + Philosophy
        <br> GPA: 3.90/4.00
        <br>
        <br> Purdue University
        <br> August 2020 - May 2021
        <br> Bachelor of Science (Transferred)
        <br> Major in Computer Engineering
        <br> GPA: 3.97/4.00
    </p>
    <br/>
    <p>
        About me: 
        <br> I am currently pursuing a bachelor's degree in Computer Science + Philosophy. My passion lies in studying the deeper philosophy of different areas in Computer Science. Currently, the degree I am seeking covers philosophical topics regarding concepts such as artificial intelligence and intellectual property rights; however, it also equips me with strong skills to develop software as an engineer. I am open to internship opportunities or job positions as a software engineer to develop my skills within the industry.
    </p>
</section>

<style>
    .front {
        position: relative;
        top: 64px;
        z-index: 1000;

        text-align: center;
        color: var(--font-color);
    }
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