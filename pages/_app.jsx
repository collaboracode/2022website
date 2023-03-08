import '../styles/index.scss'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Layout from "../components/layout"
export default function MyApp({ Component, pageProps }) {
  return (


    <GoogleReCaptchaProvider
      reCaptchaKey="6LdROuEkAAAAAHG3LoV8SQ-xXP8FIuOOBvIL5Q_S"
      // useRecaptchaNet={true}
      // useEnterprise={false}
      // scriptProps={{
      //   async: false, // optional, default to false,
      //   defer: false, // optional, default to false
      //   appendTo: 'head', // optional, default to "head", can be "head" or "body",
      //   nonce: undefined // optional, default undefined
      // }}
      // container={{ // optional to render inside custom element
      //   element: "[required_id_or_htmlelement]",
      //   parameters: {
      //     badge: '[inline|bottomright|bottomleft]', // optional, default undefined
      //     theme: 'dark', // optional, default undefined
      //   }
      // }}
    >
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </GoogleReCaptchaProvider>

  )
}
