import "./app.scss";

import React, { ReactElement } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";
import { Providers } from "../components/Providers";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Head>
        <title>react-md with next.js</title>
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Layout>
  );
}
