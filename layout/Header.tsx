import { FunctionComponent } from 'react'
import Image from 'next/image'
import MenuMobile from './MenuMobile'
import Link from 'next/link'
import { useConfig } from '../ui/ConfigProvider'
import { NavConfig } from '../config'
import { useRouter } from 'next/router'

type HeaderProps = {
  isShow: boolean
  onClick(): void
}
const Header: FunctionComponent<HeaderProps> = ({ isShow, onClick }) => {
  const { NAVS } = useConfig()
  const router = useRouter()

  return (
    <div
      className={`md:relative w-full ${
        isShow ? 'fixed top-0 overflow-y-hidden' : 'relative'
      } z-40`}
    >
      <nav className={`${isShow ? 'bg-white' : ''}`}>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-2 lg:px-0'>
          <div className='flex items-center h-5.25rem'>
            <div className='flex-shrink-0'>
              <Link href={'/'}>
                <a>
                  <Image
                    src='/symbolSphinx.svg'
                    alt='Sphinx Software Logo'
                    width={37}
                    height={37}
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className='flex items-center hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6 h-16'>
              <div className='ml-10 flex space-x-4 items-center'>
                {NAVS.map((nav: NavConfig) => (
                  <Link key={nav.href} href={nav.href}>
                    <a>
                      <div
                        className={`text-gray-250 hover:text-white px-3 py-2 text-16 cursor-pointer ${
                          router.asPath === nav.href &&
                          'border-b-2 border-orange-450'
                        }`}
                      >
                        {nav.name}
                      </div>
                    </a>
                  </Link>
                ))}
                <div>
                  <button className='border rounded-3xl px-6 py-2 border-yellow-450 text-yellow-450'>
                    <p className='text-16 leading-19'>Join us</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex md:hidden items-center p-2.5'>
            <button
              className='items-center justify-center rounded-full focus:outline-none'
              onClick={() => {
                onClick()
              }}
            >
              {isShow ? (
                <div
                  className='bg-gray-150 rounded-full'
                  style={{ width: 50, height: 50 }}
                >
                  <Image
                    src={'/iconClose.svg'}
                    width={55}
                    height={55}
                    alt={'close'}
                  />
                </div>
              ) : (
                <div
                  className='bg-orange-450 rounded-full bg-opacity-10'
                  style={{ width: 50, height: 50 }}
                >
                  <Image
                    src={'/iconMenu.svg'}
                    width={55}
                    height={55}
                    alt={'hamburgerIcon'}
                  />
                </div>
              )}
            </button>
          </div>
        </div>
        <MenuMobile isShow={isShow} />
      </nav>
    </div>
  )
}
export default Header
