import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sphinx Software</title>
        <meta name="description" content="Sphinx Software" />
        <link rel="icon" href="/symbolSphinx.svg" />
      </Head>
      <main className={styles.main}>
        <button className={'bg-gray-500 '}>tailwind css</button>
      </main>
    </div>
  )
}
