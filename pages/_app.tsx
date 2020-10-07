import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

// import Navbar from "../components/navbar/navbar";
// import UIKit from "../components/uikit/";
import UIKit from "./components/uikit"

// Global scss
/* import "../styles/uikit.scss";
import "../styles/global.scss"; */

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Strapi bloggg</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <UIKit>
        
        <Component {...pageProps} />
      </UIKit>
    </div>
  );
}