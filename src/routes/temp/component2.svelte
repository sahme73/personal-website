<script>
    let name = 'world';
    let src = '/images/cat1.jpg';
</script>

<h1>Hello {name.toUpperCase()}!</h1>
<p>Here is a cat:</p>
<img {src} alt="A cat." class="center"/>

<style>
    h1 {
        text-align: center;
    }

    p {
        color: cornflowerblue;
        font-size: 2em;
        text-align: center;
    }

    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    img.center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 10%;
    }
</style>