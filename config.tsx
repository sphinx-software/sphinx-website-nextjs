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

export declare type History = {
  year: number
  content: string
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

export const histories: History[] = [
  {
    year: 2020,
    content: 'Penetrated the Australian market.'
  },
  {
    year: 2019,
    content:
      'Provided the technology solutions for ASEAN, Europe, and US market'
  },
  {
    year: 2018,
    content: 'Begin mobile application development.'
  },
  {
    year: 2017,
    content: 'Become the Silver member of Node.JS Foundation.'
  },
  {
    year: 2016,
    content: 'Established the loT and Robotics Development Laboratory'
  },
  {
    year: 2015,
    content:
      'Established Sphinx Technology Company Software development and consultants.'
  }
]
