import Head from 'next/head'
import { Layout } from '../layout'
import JoinUsComponent from '../components/JoinUs'
import React from 'react'

export default function JoinUs() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | Join Us</title>
        <meta name='description' content='Tham gia với Sphinx Software' />
        <meta property='og:url' content='https://sphinx.vn' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:title' content='Sphinx Software' />
        <meta property='og:description' content='Sphinx Software' />
        <meta property='og:site_name' content='Sphinx Software' />
        <meta
          property='og:image'
          content='https://sphinx.vn/img/bg/hang-out.png'
        />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main className='w-full bg-join-us-banner bg-top bg-no-repeat bg-WAutoH800 fullHD:bg-W100%HAuto'>
        <Layout>
          <JoinUsComponent />
        </Layout>
      </main>
    </div>
  )
}
