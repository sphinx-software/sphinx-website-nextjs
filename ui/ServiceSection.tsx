import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

const ServiceSection: FunctionComponent = () => {
  return (
    <div
      className={'bg-gradient-to-t from-yellow-850 via-gray-850 to-gray-850'}
    >
      <div className='md:flex max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 pt-10 pb-20'>
        <div className='flex flex-1 flex-row md:mt-10 sm:mt-5 mb-5'>
          <div className={'flex-1 mt-2 leading-11'}>
            <Image
              src={'/symbolSphinx.svg'}
              height={58}
              width={58}
              alt={'Sphinx Software'}
            />
            <h3 className={'text-gray-350 mt-4'}>SERVICES</h3>
            <div className='text-white font-ABeeZee'>
              <div>Cloud</div>
              <div>Web Application</div>
              <div>Cross-platform</div>
            </div>
          </div>
          <div className={'flex-1 leading-11'}>
            <h3 className={'text-gray-350 font-ABeeZee'}>ABOUT SPHINX</h3>
            <div className={'text-white font-ABeeZee'}>
              <div>Developing history</div>
              <div>Vision and Mission</div>
              <div>Key holders</div>
              <div>R&D</div>
              <div>Achievements</div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end md:mt-0 sm:m-10'>
          <div
            className='flex justify-end'
            style={{ width: 300, height: 250, minWidth: 300 }}
          >
            <div className='absolute z-10 rounded-full mr-4'>
              <Image
                src={'/Planet.svg'}
                height={300}
                width={300}
                alt={'planet'}
              />
            </div>
            <a
              target='_blank'
              href='https://www.facebook.com/SphinxSoftware'
              rel='noopener noreferrer'
              className='absolute z-20 mt-16 cursor-pointer'
              style={{ width: 50, height: 50 }}
            />
            <div className='absolute z-0 mt-16'>
              <Image
                src={'/iconFacebook.svg'}
                width={65}
                height={65}
                alt={'fb'}
              />
            </div>
            <div className='absolute z-20 mt-44 cursor-pointer'>
              <Link href='/contacts'>
                <a>
                  <Image
                    src={'/iconContact.svg'}
                    alt={'contact'}
                    height={120}
                    width={120}
                  />
                </a>
              </Link>
            </div>
            <div className='absolute z-20 mr-16'>
              <a
                target='_blank'
                href='https://github.com/sphinx-software'
                rel='noopener noreferrer'
              >
                <Image
                  src={'/iconGithub.svg'}
                  width={450}
                  height={200}
                  alt={'github'}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
