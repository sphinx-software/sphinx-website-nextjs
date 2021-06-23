import Head from 'next/head'
import { CompanyOverview } from '../components'
import { Layout } from '../layout'
import { CommunicationSection, ServiceSection } from '../ui'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sphinx Software</title>
        <meta name='description' content='Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main>
        <Layout>
          <CompanyOverview />
          <ServiceSection />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
