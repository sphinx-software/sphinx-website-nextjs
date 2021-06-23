import { FunctionComponent } from 'react'
import styles from '../components/Home/Home.module.css'

type MenuMobileProps = {
  isShow: boolean
}
const MenuMobile: FunctionComponent<MenuMobileProps> = ({ isShow }) => {
  return (
    <div
      className={`${isShow ? 'md:hidden h-screen pt-11 bg-white' : 'hidden'}`}
    >
      <div className='flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3 leading-11'>
        <a
          href='#'
          className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center'
        >
          About SPHINX
        </a>
        <a
          href='#'
          className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center'
        >
          Services
        </a>
        <a
          href='#'
          className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center'
        >
          Blogs
        </a>
        <a
          href='#'
          className='hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center'
        >
          Contact
        </a>
        <div className='flex items-center justify-center'>
          <button className={styles.ButtonJoinUs}>
            <span className={styles.ButtonJoinUsText}>Join Us</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MenuMobile
