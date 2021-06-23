import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WorkingProcess from "../components/WorkingProcess";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sphinx Software</title>
        <meta name="description" content="Sphinx Software" />
        <link rel="icon" href="/symbolSphinx.svg" />
      </Head>
      <main>
          <WorkingProcess/>
      </main>
    </>
  )
}
