import Head from 'next/head'
import { CompanyOverview, CompanyTendency, CompanyService } from '../components'
import { Layout } from '../layout'
import { CommunicationSection, ServiceSection } from '../ui'
import WorkingProcess from "../components/Home/WorkingProcess";

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
          <CompanyTendency />
          <CompanyService />
          <WorkingProcess />
          <ServiceSection />
          <CommunicationSection />
        </Layout>
      </main>
    </div>
  )
}
