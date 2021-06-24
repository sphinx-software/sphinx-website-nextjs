import { FunctionComponent } from 'react'
import Image from 'next/image'

type HeaderProps = {
  isShow: boolean
  onClick(): void
}
const Header: FunctionComponent<HeaderProps> = ({ isShow, onClick }) => {
  return (
    <nav className='bg-white z-10'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
        <div className='flex items-center h-16'>
          <div className='flex-shrink-0'>
            <Image
              src='/symbolSphinx.svg'
              alt='Sphinx Software Logo'
              width={80}
              height={50}
            />
          </div>
        </div>
        <div className='flex items-center hidden md:block'>
          <div className='ml-4 flex items-center md:ml-6 h-16'>
            <div className='ml-10 flex space-x-4 items-center'>
              <div className='text-gray-250 hover:text-white px-3 py-2 text-sm cursor-pointer'>
                About SPHINX
              </div>
              <div className='text-gray-250 hover:text-white px-3 py-2 text-sm cursor-pointer'>
                Services
              </div>
              <div className='text-gray-250 hover:text-white px-3 py-2 text-sm cursor-pointer'>
                Blogs
              </div>
              <div className='text-gray-250 hover:text-white px-3 py-2 text-sm cursor-pointer'>
                Contact
              </div>
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
    </nav>
  )
}
export default Header
