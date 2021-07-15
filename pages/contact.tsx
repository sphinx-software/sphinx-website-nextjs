import Head from 'next/head'
import { Layout } from '../layout'
import { CommunicationSection } from '../ui'
import dynamic from 'next/dynamic'
import React from 'react'
const RequestContact = dynamic(
  () => import('../components/Contact/RequestContact'),
  {
    ssr: false
  }
)

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | Contact</title>
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
        <meta name='description' content='Liên hệ với Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main className='bg-gray-850'>
        <Layout>
          <RequestContact />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
