import Head from 'next/head'
import { Layout } from '../layout'
import JoinUsBanner from '../ui/JoinUsBanner'
import JoinUsTable from '../ui/JoinUsTable'
import { CommunicationSection } from '../ui'

export default function Joinus() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | Contact</title>
        <meta name='description' content='Tham gia với Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main
        style={{ backgroundImage: "url('/bgImage-JoinUs.png')" }}
        className='w-full h-full bg-top bg-contain	'
      >
        <Layout>
          <JoinUsBanner />
          <JoinUsTable />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
