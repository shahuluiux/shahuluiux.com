import Layout from '../components/Layout'
import Head from "next/head"
import '../styles/globals.css'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href={prefix + '/favicon.ico'} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
