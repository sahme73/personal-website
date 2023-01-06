<script>
    import { download_status } from "../store.js";
    let user = { downloaded: false };

    download_status.subscribe(value => {
        user.downloaded = value;
    });

    function DownloadResume() {
        user.downloaded = true;
        download_status.set(true);
    }
</script>

{#if !user.downloaded}
    <div style="text-align:center">
        <button class="button_unpressed" on:click={DownloadResume}>
            <a href="./files/Safeer Ahmed 2023.pdf" download="SafeerAhmed2023">Download Resume</a>
        </button>
    </div>
{/if}

{#if user.downloaded}
    <div style="text-align:center">
        <button class="button_pressed">
            Resume Downloaded
        </button>
    </div>
{/if}

<style>
    /* taken from: https://www.w3schools.com/css/css3_buttons.asp */
    .button_unpressed {
        background-color: #a5a5a5; /* Grey */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .button_pressed {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>