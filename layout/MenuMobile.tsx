import { FunctionComponent } from 'react'
import styles from '../components/Home/Home.module.css'
import Link from 'next/link'
import { useConfig } from '../ui/ConfigProvider'
import { NavConfig } from '../config'

type MenuMobileProps = {
  isShow: boolean
}
const MenuMobile: FunctionComponent<MenuMobileProps> = ({ isShow }) => {
  const { NAVS } = useConfig()

  const navBarStyles = isShow ? 'h-screen' : 'h-0'
  return (
    <div
      className={`${navBarStyles} md:hidden overflow-hidden bg-white bg-bottom`}
    >
      <div className='flex flex-col justify-center px-2 pt-2 pb-2 space-y-1 sm:px-3 leading-11'>
        {NAVS.map((nav: NavConfig) => (
          <Link key={nav.href} href={nav.href}>
            <a>
              <div className='text-gray-850 hover:bg-yellow-450 hover:text-white block px-3 py-2 rounded-md text-16 text-center'>
                {nav.name}
              </div>
            </a>
          </Link>
        ))}

        <div className='flex items-center justify-center'>
          <button className={styles.ButtonJoinUs}>
            <p className={styles.ButtonJoinUsText}>Join Us</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MenuMobile
