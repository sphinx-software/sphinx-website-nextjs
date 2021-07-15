import Head from 'next/head'
import { Layout } from '../layout'
import AboutComponent from '../components/About'
import AboutProvider from '../ui/AboutProvider'
import React from 'react'

export default function About() {
  return (
    <div>
      <Head>
        <title>Sphinx Software | About</title>
        <meta property='og:url' content='https://sphinx.vn' />
        <meta property='og:type' content='article' />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:title' content='Sphinx Software' />
        <meta property='og:description' content='Sphinx Software' />
        <meta property='og:site_name' content='Sphinx Software' />
        <meta
          property='og:image'
          content='https://sphinx.vn/img/bg/hang-out.png'
        />
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
