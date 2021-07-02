import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import IconGithub from '../public/iconGithub.svg'
import IconPlanet from '../public/Planet.svg'
import IconFacebook from '../public/iconFacebook.svg'
import IconContact from '../public/iconContact.svg'

const ServiceSection: FunctionComponent = () => {
  return (
    <section
      className={'bg-gradient-to-t from-yellow-850 via-gray-850 to-gray-850'}
    >
      <div className='md:flex max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-10 pb-20'>
        <div className='flex flex-1 flex-row md:mt-10 sm:mt-5 mb-5'>
          <div className={'flex-1 mt-2 leading-11'}>
            <Image
              src={'/symbolSphinx.svg'}
              height={58}
              width={58}
              alt={'Sphinx Software'}
            />
            <h3 className={'text-gray-350 mt-4'}>SERVICES</h3>
            <div className='text-white'>
              <div>Cloud</div>
              <div>Web Application</div>
              <div>Cross-platform</div>
            </div>
          </div>
          <div className={'flex-1 leading-11'}>
            <h3 className={'text-gray-350'}>ABOUT SPHINX</h3>
            <div className={'text-white'}>
              <div>Developing history</div>
              <div>Vision and Mission</div>
              <div>Key holders</div>
              <div>R&D</div>
              <div>Achievements</div>
            </div>
          </div>
        </div>
        <div className='flex flex-1 items-center md:justify-end justify-center md:mt-0 mt-10'>
          <div
            className='relative'
            style={{
              width: 380,
              height: 286
            }}
          >
            <div className='absolute z-10 flex w-full h-full items-center justify-center'>
              <Image src={IconPlanet} alt={'planet'} />
            </div>
            <div className='absolute w-full h-full'>
              <div className='z-0 flex w-full h-full justify-end md:justify-start md:flex-row-reverse md:-ml-8 items-start mt-7 pl-10'>
                <div className='absolute z-0'>
                  <Image src={IconFacebook} alt={'fb'} />
                </div>
              </div>
            </div>
            <div className='absolute w-full h-full'>
              <div className='z-0 flex w-full h-full justify-end md:justify-start md:flex-row-reverse md:-ml-8 items-start mt-7 pl-10'>
                <a
                  className='absolute z-20 cursor-pointer'
                  target='_blank'
                  href='https://www.facebook.com/SphinxSoftware'
                  rel='noopener noreferrer'
                  style={{ width: 50, height: 50 }}
                />
              </div>
            </div>
            <div className='absolute w-full h-full'>
              <div className='flex w-full h-full justify-start items-start'>
                <div className='absolute z-20 cursor-pointer'>
                  <a
                    target='_blank'
                    href='https://github.com/sphinx-software'
                    rel='noopener noreferrer'
                  >
                    <Image src={IconGithub} alt={'github'} />
                  </a>
                </div>
              </div>
            </div>
            <div className='absolute w-full h-full'>
              <div className='flex w-full h-full justify-end items-end '>
                <div className='absolute z-20 cursor-pointer'>
                  <Link href={'/contact'}>
                    <a>
                      <Image src={IconContact} alt={'contact'} />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
