import Head from 'next/head'
import { Layout } from '../layout'
import AboutComponent from '../components/About'

export default function About() {
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
          <AboutComponent />
        </Layout>
      </main>
    </div>
  )
}
