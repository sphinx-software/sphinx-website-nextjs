import Head from 'next/head'
import { Layout } from '../../layout'
import { useRouter } from 'next/router'
import React from 'react'
import JoinUsBanner from '../../ui/JoinUsBanner'
import { tableConfig } from '../../config'
import { CommunicationSection } from '../../ui'
import dynamic from 'next/dynamic'
const JoinUsDetail = dynamic(() => import('../../ui/JoinUsDetail'), {
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
      <main
        style={{ backgroundImage: "url('/bgImage-JoinUs.png')" }}
        className='w-full bg-top bg-no-repeat bg-WAutoH20% md:bg-WAutoH26% 4xl:bg-WAutoH35%'
      >
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
