import Head from 'next/head'
import { Layout } from '../layout'
import { CommunicationSection } from '../ui'
import RequestContact from '../components/Contact/RequestContact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | Contact</title>
        <meta name='description' content='Liên hệ với Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main
        style={{ backgroundImage: "url('/bannerBg.svg')" }}
        className='bg-top'
      >
        <Layout>
          <RequestContact />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
