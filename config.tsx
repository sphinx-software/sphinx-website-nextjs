import iconCalendar from './public/iconCalendar.svg'
import iconEngineer from './public/iconEngineer.svg'
import iconRocket from './public/iconRocket.svg'
import iconClient from './public/iconClient.svg'

export declare type A = {}

export type NavConfig = {
  name: string
  href: string
}

export declare type Information = {
  icon: any
  title: string
  subTitle: string
}

export const NAVS: NavConfig[] = [
  {
    name: 'About SPHINX',
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services'
  },
  {
    name: 'Blogs',
    href: '/blogs'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

export const aboutInformations: Information[] = [
  {
    icon: iconCalendar,
    title: '7+ Years',
    subTitle: 'Experiences since 2015'
  },
  {
    icon: iconEngineer,
    title: '50+ Engineers',
    subTitle: 'Young and enthusiastic'
  },
  {
    icon: iconRocket,
    title: '80+ Projects',
    subTitle: 'Unique and professional'
  },
  {
    icon: iconClient,
    title: '200+ Clients',
    subTitle: 'Long-term relationship'
  }
]
