<script>
    let user = {
        downloaded: false
    };

    function DownloadResume() {
        user.downloaded = true;
    }
</script>

{#if !user.downloaded}
    <button on:click={DownloadResume}>
        <a href="./files/Safeer Ahmed 2023.pdf" download="SafeerAhmed2023">Download Resume</a>
    </button>
{/if}

{#if user.downloaded}
    <button>
        Resume Downloaded
    </button>
{/if}