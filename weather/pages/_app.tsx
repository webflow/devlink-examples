import "../devlink/index.css";
import "../devlink/global.css";

import type { AppProps } from "next/app";
import { InteractionsProvider, Layout, SideNav, TopNav } from "../devlink";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout
        sidebar={<SideNav />}
        topnav={<TopNav />}
        main={<Component {...pageProps} />}
      />
  );
}
