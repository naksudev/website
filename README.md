[![Astro](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff)](#) [![Netlify Status](https://api.netlify.com/api/v1/badges/0e6853a8-6bfc-49a5-a534-2597734c35e2/deploy-status)](https://app.netlify.com/sites/naksuu/deploys) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](#)

# Naksu's website
A website I made for fun with Astro and deployed on Netlify.

## Installation
```bash
git clone https://github.com/naksudev/website.git
cd website
pnpm install # or npm, whatever.
```

## Local development
While it's possible to use `astro dev` for local development, using `netlify dev` is a better choice to use serverless functions.
```bash
pnpm -g install netlify-cli
netlify dev
```

> [!IMPORTANT]
> Don't forget to create an `.env` file with the following variables:
> - `PUBLIC_DOORKEY`  
>
> or else you won't have access to the console page.

## License
MIT
