<script lang=ts>
    export const prerender = true;

    import { light_mode, dark_mode, background0 } from '../store';

    let color = 'black';
    background0.subscribe(value => {
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
</section>

<section class="front" style="--font-color: {font_color};">
    <a href="./files/safeer-ahmed-resume.pdf" download="safeer-ahmed-resume" class="obj" style="color: {font_color};">Download Resume</a>
    <br/>
    <h1>Bio</h1>
    <br/>
    <div class="flexbox">
        <div class="avatar"></div>
    </div>
    <br/>
    <p><b>Name:</b> Safeer Ahmed</p>
    <br/>
    <p>
        <b>Education:</b>
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
        <b>Technical Skills:</b>
        <br> <ins>Programming Languages:</ins> C, C#, C++, HTML, Java, JavaScript, MATLAB, MIPS Assembly, Python, Verilog, VPython
        <br> <ins>Frameworks/Tools:</ins> React.js, Next.js, Node.js, D3.js, SvelteKit, Unity, Unreal Engine 5, Git, Docker, Photoshop, Excel
        <br> <ins>Spoken Languages:</ins> English, Urdu, Spanish
    </p>
    <br/>
    <p>
        <b>About me:</b>
        <br> I am currently pursuing a bachelor's degree in Computer Science + Philosophy. My passion lies in studying the deeper philosophy of different areas in Computer Science. Currently, the degree I am seeking covers philosophical topics regarding concepts such as artificial intelligence and intellectual property rights; however, it also equips me with strong skills to develop software as an engineer. I am open to internship opportunities or job positions as a software engineer to develop my skills within the industry.
    </p>
    <br/><br/><br/><br/><br/>
</section>

<style>
    .flexbox {
        align-items: center;
        display: flex;
        justify-content: center;
        z-index: 500;
    }
    .avatar {
        /* CSS taken from: https://stackoverflow.com/questions/26681059/create-a-circle-avatar-from-a-rectangle-image-keeping-proportions-and-just-using */

        /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
        background-image: url('/images/me.jfif');
        
        /* make a square container */
        width: 150px;
        height: 150px;

        /* fill the container, preserving aspect ratio, and cropping to fit */
        background-size: cover;

        /* center the image vertically and horizontally */
        background-position: top center;

        /* round the edges to a circle with border radius 1/2 container size */
        border-radius: 50%;
    }
    .obj {
        text-decoration: none;
        opacity: 1.0;
        transition: 0.3s;
    }
    .obj:hover {
        opacity: 0.6;
    }
    .front {
        position: relative;
        top: 64px;
        z-index: 500;

        text-align: center;
        color: var(--font-color);
    }
    .stretch {
        margin-left: -8px;
        margin-right: -8px;
    }
    .bg {
        position: fixed;
        bottom: 0vh;
        right: 0vw;
        top: 0vh;
        left: 0vw;

        display: block;
        object-fit: cover;
        height: 100vh;
        width: 100vw;
        z-index: 500;

        background-color: var(--theme-color);
        transition: background-color 0.3s;
        transform: translate3d(0, 0, 0);
    }
    @media screen and (max-width: 600px) {
        .bg {
            position: fixed;
            bottom: 0vh;
            right: 0vw;
            top: 0vh;
            left: 0vw;

            display: block;
            object-fit: cover;
            height: 100vh;
            width: 100vw;
            z-index: 500;

            background-color: var(--theme-color);
            transition: background-color 0.3s;
            transform: translate3d(0, 0, 0);
        }
        .front {
            z-index: 500;
        }
    }
</style>