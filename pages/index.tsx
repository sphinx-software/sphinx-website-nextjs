import Head from 'next/head'
import { CompanyOverview, CompanyTendency, CompanyService } from '../components'
import { Layout } from '../layout'
import { CommunicationSection, ServiceSection } from '../ui'
import WorkingProcess from "../components/Home/WorkingProcess";
import BannerSection from '../ui/BannerSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sphinx Software</title>
        <meta name='description' content='Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main
        style={{ backgroundImage: "url('/bannerBg.svg')" }}
        className='bg-top'
      >
        <Layout>
          <BannerSection />
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
