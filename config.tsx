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
