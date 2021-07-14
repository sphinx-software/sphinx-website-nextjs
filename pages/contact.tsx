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
