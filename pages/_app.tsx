
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "mapbox-gl/dist/mapbox-gl.css"

import "../styles/main.scss";
import Navigation from "components/global/naviagtion/Navigation";
import HeadAndMeta from "components/global/head/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadAndMeta 
        title='Postagram' 
        description='პოსტაგრამი - საფოსტო საკურიერო სერვისები'
        favIconImagePath='/svg/small_icon.svg'
        baseUrl='https://postagram.ge'
        ogTitle='📦 postagram'
        ogDescription='პოსტაგრამი - საფოსტო საკურიერო სერვისები'
        ogImagePath='/pictures/postagram_og.png'/>

      <GeistProvider>
        <CssBaseline />

        <Navigation />
        <Component {...pageProps} />
      </GeistProvider>
    </>
  );
}

export default MyApp;
