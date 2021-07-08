import Head from 'next/head'
import { Layout } from '../layout'
import AboutComponent from '../components/About'
import AboutProvider from '../ui/AboutProvider'

export default function About() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | About</title>
        <meta name='description' content='Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main
        style={{ backgroundImage: "url('/aboutBg.png')" }}
        className='bg-top bg-no-repeat'
      >
        <Layout>
          <AboutProvider>
            <AboutComponent />
          </AboutProvider>
        </Layout>
      </main>
    </div>
  )
}
