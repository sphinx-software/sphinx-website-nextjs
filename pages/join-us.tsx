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
