
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Footer from '../components/general/Footer'
import Toolbar from '../components/general/Toolbar'

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Dataverse DAO</title>
        <meta name="description" content="Fostering adoption of the data economy by making data mainstream together!" />
        <meta name="robots" content="noodp,noydir" />
      </Head>
      <Toolbar />
      <main className='flex flex-col items-center'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
