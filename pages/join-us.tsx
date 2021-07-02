import Head from 'next/head'
import { Layout } from '../layout'
import JoinUsComponent from '../components/JoinUs'

export default function JoinUs() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | Join Us</title>
        <meta name='description' content='Tham gia với Sphinx Software' />
        <link rel='icon' href='/symbolSphinx.svg' />
      </Head>
      <main
        style={{ backgroundImage: "url('/bgImage-JoinUs.png')" }}
        className='w-full bg-top bg-no-repeat bg-WAutoH40%'
      >
        <Layout>
          <JoinUsComponent />
        </Layout>
      </main>
    </div>
  )
}
