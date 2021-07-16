import Head from 'next/head'
import { CompanyOverview, CompanyTendency, CompanyService } from '../components'
import { Layout } from '../layout'
import { CommunicationSection, ServiceSection } from '../ui'
import WorkingProcess from '../components/Home/WorkingProcess'
import HomeBanner from '../ui/HomeBanner'
import React, { useEffect } from 'react'
import { Events } from 'react-scroll'
import HomeMenu from '../ui/HomeMenu'
import { bgWhite } from 'colorette'

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})

    return function cleanup() {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  })

  return (
    <div>
      <Head>
        <title>Sphinx Software</title>
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
        style={{ backgroundImage: "url('/bannerBg.svg')" }}
        className='bg-top'
      >
        <Layout>
          <HomeBanner />
          <div className={'bg-white'} style={{ height: 120 }} />
          <HomeMenu />
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
