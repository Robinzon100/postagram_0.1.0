
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "mapbox-gl/dist/mapbox-gl.css"

import Navigation from "components/global/naviagtion/Navigation";
import "../styles/main.scss";
import HeadAndMeta from "components/global/head/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
        <HeadAndMeta/>

      <GeistProvider>
        <CssBaseline />

        <Navigation />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}

export default MyApp;
