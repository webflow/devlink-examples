This is a reference implementation of [Webflow DevLink](https://webflow.com/devlink) for documentation purposes. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Clone the Webflow Project

In order to use this project, you'll need to clone this Webflow project into your own workspace. https://webflow.com/made-in-webflow/website/devlink-reference

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/1051021/217922636-fe237cc7-74b6-482d-8af4-7422e344b18c.png">

### Set up your local environment

In the Designer open the Components menu and click on the "Export components" button to access the DevLink config. Then configure your `.webflowrc.json` based off the config values.

<img width="669" alt="devlink modal" src="https://user-images.githubusercontent.com/5628190/218443547-f6dedd23-dbb8-4de9-a5d9-caba432e012e.png">


Replace the API Token with your site's API key (which you can generate in site settings Integrations tab).

<img width="1154" alt="api key" src="https://user-images.githubusercontent.com/5628190/218443577-2b8e6bce-40e2-4e96-8ea1-ad92bb28bdaa.png">

Then, install the needed dependencies.
```bash
npm install
```

Sync all the Webflow components into your local filesystem.

```bash
npx webflow devlink sync
```

Last, run the development server:

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


