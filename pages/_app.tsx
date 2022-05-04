import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import CookieConsent from "react-cookie-consent"
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  return (
    <Layout >
      <Component {...pageProps} />
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </Layout>
  )
}
export default MyApp
