import Head from 'next/head'
import { CompanyOverview, CompanyTendency } from '../components'
import { CompanyService } from '../components/Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sphinx Software</title>
        <meta name='description' content='Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main>
        <CompanyOverview />
        <CompanyTendency />
        <CompanyService />
      </main>
    </div>
  )
}
