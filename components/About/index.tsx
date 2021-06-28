import {
  AboutBanner,
  BoardOfDirector,
  CommunicationSection,
  DevelopingHistory,
  InnovationFeature,
  ServiceSection
} from '../../ui'
import ResearchDevelopment from '../../ui/ResearchDevelopment'

const About = () => {
  return (
    <>
      <AboutBanner />
      <DevelopingHistory />
      <InnovationFeature />
      <BoardOfDirector />
      <ResearchDevelopment />
      <ServiceSection />
      <CommunicationSection />
    </>
  )
}

export default About
