<script lang=ts>
    export const prerender = true;

    import { light_mode, dark_mode, background0 } from '../../store';

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
    <title>safeer.tech | posts</title>
</head>

<section class="front" style="--font-color: {font_color};">
    <h1>Project 1</h1>
    <div class='tab-content'>
        <div class='myTableauViz'>
            <div class='tableauPlaceholder' id='viz1687034475784' style="position: relative">
                <noscript>
                    <a href={'#'}>
                    <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DashboardProject-EmissionsvsGDP&#47;Dashboard&#47;1_rss.png' style='border: none' />
                    </a>
                </noscript>
                        <object title='dashboard' class='tableauViz' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                            <param name='embed_code_version' value='3' /> <param name='site_root' value='' />
                            <param name='name' value='DashboardProject-EmissionsvsGDP&#47;Dashboard' />
                            <param name='tabs' value='yes' /><param name='toolbar' value='yes' />
                            <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Da&#47;DashboardProject-EmissionsvsGDP&#47;Dashboard&#47;1.png' /> 
                            <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
                            <param name='display_spinner' value='yes' />
                            <param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' />
                        </object>
            </div>
            <script type='text/javascript'>
                var divElement = document.getElementById('viz1687034475784');
                var vizElement = divElement.getElementsByTagName('object')[0];
                if (divElement.offsetWidth > 800) {
                    vizElement.style.minWidth = '1366px';
                    vizElement.style.maxWidth = '100%';
                    vizElement.style.minHeight = '818px';
                    vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
                } else if (divElement.offsetWidth > 500) {
                    vizElement.style.minWidth = '1366px';
                    vizElement.style.maxWidth = '100%';
                    vizElement.style.minHeight = '818px';
                    vizElement.style.maxHeight = (divElement.offsetWidth * 0.75) + 'px';
                } else {
                    vizElement.style.width = '100%';
                    vizElement.style.minHeight = '1300px';
                    vizElement.style.maxHeight = (divElement.offsetWidth * 1.77) + 'px';
                }
                var scriptElement = document.createElement('script');
                scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
                vizElement.parentNode.insertBefore(scriptElement, vizElement);
            </script>
        </div>
    </div>
</section>

<section class="stretch">
    <div class="bg" style="--theme-color: {color}" />
</section>

<style>
    /* Styles will be moved to a library managed by sass in future patches. */
    .myTableauViz {
        width: 1366px;
        margin-left : auto;
        margin-right: auto;
        z-index: 502;    
    }
    .tab-content {
        padding: auto;
        z-index: 502;
    }
    .front {
        position: relative;
        top: 64px;
        z-index: 501;

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
            bottom: 8%;
            right: 0%;

            display: block;
            object-fit: cover;
            height: 84%;
            width: 100%;
            z-index: 500;

            background-color: var(--theme-color);
            transition: background-color 0.3s;
            transform: translate3d(0, 0, 0);
        }
        .front {
            z-index: 501;
        }
    }
</style>