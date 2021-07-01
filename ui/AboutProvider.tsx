import { createContext, FC, useContext, useState } from 'react'

export enum SECTION {
  DEVELOPING_HISTORY = 'DEVELOPING_HISTORY',
  VISION_MISSION = 'VISION_MISSION',
  KEYHOLDER = 'KEYHOLDER',
  RESEARCH_DEVELOPMENT = 'RESEARCH_DEVELOPMENT',
  ACHIEVEMENTS = 'ACHIEVEMENTS'
}
declare type AboutProviderState = [
  { sectionActive: SECTION },
  { changeSection: (value: SECTION) => void }
]

const AboutContext = createContext<AboutProviderState | null>(null)

export const useAboutSection = () =>
  useContext(AboutContext) as AboutProviderState

const AboutProvider: FC = ({ children }) => {
  const [sectionActive, changeSection] = useState<SECTION>(
    SECTION.DEVELOPING_HISTORY
  )
  return (
    <AboutContext.Provider value={[{ sectionActive }, { changeSection }]}>
      {children}
    </AboutContext.Provider>
  )
}
export default AboutProvider
