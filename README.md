<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#personal-website">Summary</a></li>
    <li><a href="#developing">Developing</a></li>
    <li><a href="#building">Build & Publish</a></li>
  </ol>
</details>

# Personal Website

A public website to showcase personal information (resume, blog posts, etc.), powered by the [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte) template on the latest version of SvelteKit. This website is currently supported on desktop browsers and mobile devices but needs some compatibility patches. The website template is open for anyone to utilize.

<p align="right">(<a href="#top">back to top</a>)</p>

## Developing

After cloning the project and installing dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server on a local host server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Building

To create a production version:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

Note: the website is currently hosted using Netlify and is live [`here`](https://safeer.tech).
Feel free to leave any feedback or feature requests.

<p align="right">(<a href="#top">back to top</a>)</p>
