import Head from 'next/head'
import { Layout } from '../../layout'
import { useRouter } from 'next/router'
import React from 'react'
import { tableConfig } from '../../config'
import { CommunicationSection } from '../../ui'
import JoinUsDetail from '../../ui/JoinUsDetail'
import JoinUsBanner from '../../ui/JoinUsBanner'

export default function JoinUs() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>Sphinx Software | Join Us</title>
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
        <meta name='description' content='Tham gia với Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main className='w-full bg-join-us-banner bg-top bg-no-repeat bg-WAutoH800 fullHD:bg-W100%HAuto'>
        <Layout>
          <JoinUsBanner />
          <JoinUsDetail
            resource={tableConfig.resource}
            activeJob={id as string}
            router={router}
          />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
