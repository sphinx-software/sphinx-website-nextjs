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
import AboutProvider from '../../ui/AboutProvider'
import { useRef } from 'react'

const About = () => {
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
