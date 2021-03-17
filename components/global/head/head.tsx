import React from 'react'
import Head from "next/head";


const head = () => {
    return (
        <>
            <Head>
                <title>Postagram</title>
                <link rel="shortcut icon" href="/svg/small_icon.svg" />
            </Head>
        <Head>
        {/* <meta name="title" content="Postagram" />

        <meta
          name="description"
          content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="og:title" content="🔵 Oxeni" />
        <meta
          property="og:description"
          content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="og:image" content="/meta_images/og_image.png" />/
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://oxeni.dev/meta_images/og_image.png"
        />
        <meta property="twitter:title" content="🔵 Oxeni" />
        <meta
          property="twitter:description"
          content="cutting edge technology to create true technical beauty of the future"
        />
        <meta property="twitter:image" content="/meta_images/og_image.png" /> */}

        <link rel="shortcut icon" href="#" />
            <meta name="viewport" content="height=device-height, 
                width=device-width, initial-scale=1.0, 
                minimum-scale=1.0, maximum-scale=1.0, 
                user-scalable=no, target-densitydpi=device-dpi">
            </meta>
            </Head>
        </>
    )
}

export default head
