import { FunctionComponent } from 'react'
import styles from '../components/Home/Home.module.css'
import classNames from 'classnames'

type MenuMobileProps = {
  isShow: boolean
}
const MenuMobile: FunctionComponent<MenuMobileProps> = ({ isShow }) => {
  const navBarStyles = isShow ? 'h-screen' : 'h-0'
  return (
    <div
      className={`${navBarStyles} md:hidden overflow-hidden bg-white bg-bottom`}
    >
      <div className='flex flex-col justify-center px-2 pt-2 pb-2 space-y-1 sm:px-3 leading-11'>
        <a
          href='#'
          className='text-gray-250 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-ABeeZee'
        >
          About SPHINX
        </a>
        <a
          href='#'
          className='text-gray-250 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-ABeeZee'
        >
          Services
        </a>
        <a
          href='#'
          className='text-gray-250 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-ABeeZee'
        >
          Blogs
        </a>
        <a
          href='#'
          className='text-gray-250 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-center font-ABeeZee'
        >
          Contact
        </a>
        <div className='flex items-center justify-center font-ABeeZee'>
          <button className={styles.ButtonJoinUs}>
            <p className={styles.ButtonJoinUsText}>Join Us</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default MenuMobile
