import "../devlink/index.css";
import "../devlink/global.css";

import type { AppProps } from "next/app";

import { InteractionsProvider, Layout, SideNav, TopNav, createIX2Engine } from "../devlink";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <InteractionsProvider createEngine={createIX2Engine}>
      <Layout
        sidebar={<SideNav />}
        topnav={<TopNav />}
        main={<Component {...pageProps} />}
      />
      </InteractionsProvider>
  );
}
