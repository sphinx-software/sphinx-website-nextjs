import {
  AboutBanner,
  Achievement,
  BoardOfDirector,
  CommunicationSection,
  DevelopingHistory,
  InnovationFeature,
  ResearchDevelopment,
  ServiceSection
} from '../../ui'
import AboutMenu from '../../ui/AboutMenu'
import React, { useEffect } from 'react'
import { Events } from 'react-scroll'

const About = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {})
    Events.scrollEvent.register('end', () => {})

    return function cleanup() {
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
    }
  })

  return (
    <>
      <AboutBanner />
      <AboutMenu />
      <DevelopingHistory />
      <InnovationFeature />
      <BoardOfDirector />
      <ResearchDevelopment />
      <Achievement />
      <ServiceSection />
      <CommunicationSection />
    </>
  )
}

export default About
