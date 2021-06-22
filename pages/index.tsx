import Head from 'next/head'
import CompanyOverview from '../layout/Home/CompanyOverview'
import CompanyTendency from '../layout/Home/CompanyTendency'

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
        <CompanyOverview />
        <CompanyTendency />
      </main>
    </div>
  )
}
