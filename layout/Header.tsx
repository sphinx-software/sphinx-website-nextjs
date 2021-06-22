import { FunctionComponent } from 'react'
import Image from 'next/image'

const Header: FunctionComponent = () => {
  return (
    <nav>
      <div className='flex justify-between max-w-7xl mx-auto px-6 sm:px-6 lg:px-8'>
        <div className='flex items-center h-16'>
          <div className='flex-shrink-0'>
            <Image
              src='/symbolSphinx.svg'
              alt='Sphinx Software Logo'
              width={72}
              height={45}
            />
          </div>
        </div>
        <div className='flex items-center hidden md:block'>
          <div className='ml-4 flex items-center md:ml-6 h-16'>
            <div className='ml-10 flex space-x-4'>
              <div className='text-gray-300 hover:text-white px-3 py-2 text-sm font-ABeeZee'>
                About SPHINX
              </div>
              <div className='text-gray-300 hover:text-white px-3 py-2 text-sm font-ABeeZee'>
                Services
              </div>
              <div className='text-gray-300 hover:text-white px-3 py-2 text-sm font-ABeeZee'>
                Blogs
              </div>
              <div className='text-gray-300 hover:text-white px-3 py-2 text-sm font-ABeeZee'>
                Contact
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
