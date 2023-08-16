import { SessionProvider } from "next-auth/react"
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// import React, { useEffect, useState } from 'react';

import Layout from "../components/layout"

import { RecaptchaAPIURL, RecaptchaSiteKey } from '../utils/Statics';
import useScript from '../utils/useScript';

import '../styles/index.scss'

export default function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  useScript(`${RecaptchaAPIURL}?render=${RecaptchaSiteKey}`);

  // const [recaptchaSiteKey, setRecaptchaSiteKey] = useState(RecaptchaSiteKey);

  // useEffect(() => {
  //   const getRecaptchaSiteKey = async () => {
  //     const key = await miscService.getRecaptchaSiteKey();

  //     if (key) {
  //       setRecaptchaSiteKey(key);
  //     } else {
  //       console.error("[ERROR]: ReCAPTCHA Site Key not found.");
  //     }
  //   }

  //   getRecaptchaSiteKey();
  // }, []);

  return (


    // <GoogleReCaptchaProvider
    //   reCaptchaKey="6LdROuEkAAAAAHG3LoV8SQ-xXP8FIuOOBvIL5Q_S"
    //   // useRecaptchaNet={true}
    //   // useEnterprise={false}
    //   // scriptProps={{
    //   //   async: false, // optional, default to false,
    //   //   defer: false, // optional, default to false
    //   //   appendTo: 'head', // optional, default to "head", can be "head" or "body",
    //   //   nonce: undefined // optional, default undefined
    //   // }}
    //   // container={{ // optional to render inside custom element
    //   //   element: "[required_id_or_htmlelement]",
    //   //   parameters: {
    //   //     badge: '[inline|bottomright|bottomleft]', // optional, default undefined
    //   //     theme: 'dark', // optional, default undefined
    //   //   }
    //   // }}
    // >
    <SessionProvider session={session}>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    // </GoogleReCaptchaProvider>

  )
}
