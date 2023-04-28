This is a reference implementation of [Webflow DevLink](https://webflow.com/devlink) for documentation purposes. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Clone the Webflow Project

In order to use this project, you'll need to clone this Webflow project into your own workspace. https://webflow.com/made-in-webflow/website/devlink-reference

<img width="1470" alt="image" src="https://user-images.githubusercontent.com/1051021/217922636-fe237cc7-74b6-482d-8af4-7422e344b18c.png">

### Set up your local environment

In the Designer open the Components menu and click on the "Export components" button to access the DevLink config. Then configure your `.webflowrc.json` based off the config values.

<img width="650" alt="ed0f6c7-export_components" src="https://user-images.githubusercontent.com/5628190/235150237-9b2d0bb8-22bb-4528-b9b6-f4dd81fbe9dd.png"> <img width="600" alt="devlink config" src="https://user-images.githubusercontent.com/5628190/235150248-9bf96528-35f4-44da-95fe-39f0db0eaa19.png">


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


