import { FC, useEffect, useRef } from 'react'
import iconVision from './../public/iconVision.svg'
import iconMission from './../public/iconMission.svg'
import pyramid from '../public/pyramid.svg'
import Image from 'next/image'
import styles from './../styles/About.module.css'
import { SECTION, useAboutSection } from './AboutProvider'
import ScrollAnimation from 'react-animate-on-scroll'

const InnovationFeature = () => {
  const ref = useRef<any>(null)
  const [{ sectionActive }] = useAboutSection()
  useEffect(() => {
    if (sectionActive === SECTION.VISION_MISSION) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sectionActive])
  return (
    <div className='bg-gray-250 bg-opacity-30'>
      <div className='mx-auto max-w-7xl px-3 md:px-0 py-28'>
        <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
          <p
            className='text-center bg-cover text-32 md:text-36 leading-48 text-gray-350'
            ref={ref}
          >
            CREATING THE INNOVATIVE FUTURE
          </p>
        </ScrollAnimation>
        <div className='flex flex-col md:flex-row mt-20'>
          <div className='flex-1 xl:flex xl:justify-center'>
            <div className='hidden xl:block'>
              <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce>
                <Vision />
              </ScrollAnimation>
            </div>
            <div className='block xl:hidden md:pl-6 md:pr-3'>
              <VisionMobile />
            </div>
          </div>
          <div className='flex-1 xl:flex xl:justify-center'>
            <div className='hidden xl:block mt-20 md:mt-0'>
              <ScrollAnimation animateIn='animate__fadeInRight' animateOnce>
                <Mission />
              </ScrollAnimation>
            </div>
            <div className='block xl:hidden mt-6 md:mt-0 md:pr-6'>
              <MissionMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Vision: FC = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/visionBg.svg")'
      }}
      className='bg-cover bg-center bg-no-repeat h-450 md:w-390 md:h-420 lg:w-520 lg:h-450'
    >
      <div className='pt-12'>
        <div className='flex items-center flex-col justify-center space-y-4'>
          <Image src={iconVision} />
          <p className={styles.visionText}>VISION</p>
          <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
            Leading technology company in Vietnam.
          </p>
        </div>
      </div>
    </div>
  )
}

const VisionMobile: FC = () => {
  return (
    <div className='bg-white rounded-2xl h-450 max-w-536 shadow-xl'>
      <div className='pt-12 h-full'>
        <div className='flex items-center flex-col justify-between space-y-4 h-full'>
          <Image src={iconVision} />
          <p className={styles.visionText}>VISION</p>
          <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
            Leading technology company in Vietnam.
          </p>
          <div className='-pb-5'>
            <Image src={pyramid} alt={'pyramid'} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Mission: FC = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/missionBg.svg")'
      }}
      className='bg-cover bg-center bg-no-repeat h-450 md:w-390 md:h-420 lg:w-520 lg:h-450'
    >
      <div className='pt-12 px-2'>
        <div className='flex flex-col justify-center space-y-4'>
          <div className='flex flex-col items-center space-y-4'>
            <Image src={iconMission} />
            <p className={styles.visionText}>MISSION</p>
          </div>
          <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
            Providing the most professional technology services for clients
            worldwide with
          </p>
          <div className='pt-2 xl:pl-20'>
            <ul className='list-disc list-outside ml-4'>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The scalable and high-performance standard.
              </li>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The innovative and creative solutions.
              </li>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The lifetime warranty.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const MissionMobile: FC = () => {
  return (
    <div className='bg-white rounded-2xl max-w-536 h-450 shadow-xl'>
      <div className='pt-12 px-2'>
        <div className='flex flex-col justify-center space-y-4'>
          <div className='flex flex-col items-center space-y-4'>
            <Image src={iconMission} />
            <p className={styles.visionText}>MISSION</p>
          </div>
          <div className='xl:px-16'>
            <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
              Providing the most professional technology services for clients
              worldwide with
            </p>
          </div>
          <div className='md:px-2 pt-2 xl:pl-20'>
            <ul className='list-disc list-outside ml-4'>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The scalable and high-performance standard.
              </li>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The innovative and creative solutions.
              </li>
              <li className='text-14 md:text-16 leading-32 text-black-300'>
                The lifetime warranty.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationFeature
