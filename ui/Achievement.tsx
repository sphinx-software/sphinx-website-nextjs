import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import iconRocket from './../public/iconRocket.svg'
import iconGlobal from './../public/iconGlobal.svg'
import iconReward from './../public/iconReward.svg'
import { SECTION, useAboutSection } from './AboutProvider'
import ScrollAnimation from 'react-animate-on-scroll'

const Achievement: FC = () => {
  const ref = useRef<any>(null)
  const [{ sectionActive }] = useAboutSection()
  useEffect(() => {
    if (sectionActive === SECTION.ACHIEVEMENTS) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sectionActive])
  return (
    <div className='bg-gray-850' ref={ref}>
      <div className='mx-auto max-w-7xl py-12 md:py-20 px-6 lg:px-0 xl:py-28 -mt-0.5'>
        <div>
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
            <p className='text-36 leading-48 text-white text-center'>
              Achievements
            </p>
          </ScrollAnimation>
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-4 xl:gap-8 place-content-center mt-14 lg:mt-20'>
          <ScrollAnimation animateIn='animate__fadeInUp' delay={350}>
            <div className='px-3 md:px-7 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50 shadow-2xl'>
              <Image src={iconRocket} alt='Sphinx Software' />
              <div className='bg-gray-850 text-center w-full py-4 bg-opacity-20 rounded-2xl mt-6 md:min-h-160'>
                <p className='text-16 leading-48'>Expanded the business to</p>
                <p className='text-24 leading-48'>300%</p>
                <p className='text-16 leading-48'>in over six years</p>
              </div>
              <div className='bg-gray-850 text-center w-full mt-6 py-4 bg-opacity-20 rounded-2xl md:min-h-160'>
                <p className='text-16 leading-48'>
                  Revenue increasing at least
                </p>
                <p className='text-24 leading-48'>20%</p>
                <p className='text-16 leading-48'>each year</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='animate__fadeInUp' delay={700}>
            <div className='px-3 md:px-7 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50 mt-7 md:mt-0 shadow-2xl'>
              <Image src={iconGlobal} alt='Sphinx Software' />
              <div className='bg-gray-850 text-center w-full py-4 bg-opacity-20 rounded-2xl mt-6 md:min-h-180'>
                <p className='text-16 leading-48'>
                  The company market mainly was Japan
                </p>
                <p className='text-24 leading-48'>2015 - 2018</p>
                <div />
              </div>
              <div className='bg-gray-850 text-center w-full mt-6 py-4 bg-opacity-20 rounded-2xl md:min-h-180'>
                <p className='text-16 leading-48'>
                  Expanded market to over the world
                </p>
                <p className='text-24 leading-48'>2019</p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn='animate__fadeInUp' delay={1050}>
            <div className='px-3 md:px-7 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50 mt-7 md:mt-0 shadow-2xl'>
              <Image src={iconReward} alt='Sphinx Software' />
              <div className=' text-center w-full py-4 rounded-2xl mt-6 md:min-h-180'>
                <p className='text-16 leading-32 px-0 md:px-12'>
                  Sphinx contributed to JavaScript Development by joining
                  Node.JS Foundation
                </p>
              </div>
              <div className='bg-gray-850 text-center w-full mt-6 py-4 bg-opacity-20 rounded-2xl md:min-h-180'>
                <p className='text-16 leading-48'>Silver Member in</p>
                <p className='text-24 leading-48'>2017</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

export default Achievement
