import "../devlink/index.css";
import "../devlink/global.css";

import type { AppProps } from "next/app";

import {
  InteractionsProvider,
  Layout,
  SideNav,
  createIX2Engine,
  TopNav,
} from "../devlink";
import { LocationForm } from "../components/LocationForm";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InteractionsProvider createEngine={createIX2Engine}>
      <Layout
        sidebar={<SideNav />}
        topnav={<TopNav locationForm={<LocationForm />} />}
        main={<Component {...pageProps} />}
      />
    </InteractionsProvider>
  );
}
