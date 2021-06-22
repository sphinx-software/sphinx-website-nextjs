import Head from 'next/head'
import { CompanyOverview } from '../components'

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
      </main>
    </div>
  )
}
