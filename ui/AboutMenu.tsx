import { SECTION } from './AboutProvider'
import React from 'react'
import style from '../styles/About.module.css'
import { Link } from 'react-scroll'

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
  return (
    <div className='bg-white sticky -mt-20 md:-mt-1 top-0 z-50 py-2 flex flex-col lg:items-center px-3 md:px-0'>
      <div className='overflow-x-auto scrollbar-none whitespace-nowrap pl-0 md:pl-8 lg:p-0'>
        <ul className='flex items-center space-x-4'>
          {menu.map((m, i) => (
            <li key={i}>
              <Link
                activeClass={style.active}
                className={style.aboutMenu}
                to={m.href}
                spy={true}
                smooth={true}
                duration={500}
              >
                {m.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutMenu
