import Head from 'next/head'
import { Layout } from '../../layout'
import { useRouter } from 'next/router'
import React from 'react'
import { tableConfig } from '../../config'
import { CommunicationSection } from '../../ui'
import dynamic from 'next/dynamic'
const JoinUsDetail = dynamic(() => import('../../ui/JoinUsDetail'), {
  ssr: false
})
const JoinUsBanner = dynamic(() => import('../../ui/JoinUsBanner'), {
  ssr: false
})

export default function JoinUs() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Head>
        <title>Sphinx Software | Join Us</title>
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
