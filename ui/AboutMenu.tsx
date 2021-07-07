import { SECTION, useAboutSection } from './AboutProvider'

const menu = [
  {
    label: 'Developing history',
    href: SECTION.DEVELOPING_HISTORY
  },
  {
    label: 'Vision - Mission',
    href: SECTION.VISION_MISSION
  },
  {
    label: 'Keyholder',
    href: SECTION.KEYHOLDER
  },
  {
    label: 'R&D',
    href: SECTION.RESEARCH_DEVELOPMENT
  },
  {
    label: 'Achievements',
    href: SECTION.ACHIEVEMENTS
  }
]
const AboutMenu = () => {
  const [{ sectionActive }, { changeSection }] = useAboutSection()

  return (
    <div className='bg-white sticky -mt-20 md:-mt-1 top-0 z-50 py-2 flex flex-col lg:items-center px-3 md:px-0'>
      <div className='overflow-x-auto scrollbar-none whitespace-nowrap pl-0 md:pl-8 lg:p-0'>
        <ul className='flex items-center space-x-4'>
          {menu.map((m, i) => (
            <li
              onClick={() => changeSection(m.href)}
              className={`text-16 leading-32 py-1 px-4 cursor-pointer hover:bg-gray-350 hover:bg-opacity-10 border rounded-3xl  border-opacity-10 ${
                sectionActive === m.href
                  ? 'bg-yellow-450 border-yellow-450 bg-opacity-100 text-white hover:bg-yellow-450 hover:bg-opacity-100'
                  : 'text-gray-350'
              }`}
              key={i}
            >
              {m.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutMenu
