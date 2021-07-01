import { FC } from 'react'
import iconVision from './../public/iconVision.svg'
import iconMission from './../public/iconMission.svg'
import pyramid from '../public/pyramid.svg'
import Image from 'next/image'
import styles from './../styles/About.module.css'

const InnovationFeature = () => {
  return (
    <div className='bg-gray-250'>
      <div className='mx-auto max-w-7xl pt-12 md:pt-20 pb-10 px-2 xl:pb-20 md:px-0'>
        <p className='text-center bg-cover text-32 md:text-36 leading-48 text-gray-350'>
          CREATING THE INNOVATIVE FUTURE
        </p>
        <div className='grid grid-rows-1 md:grid-cols-2 mt-20 md:gap-x-4 md:px-2'>
          <div className='hidden xl:block'>
            <Vision />
          </div>
          <div className='block xl:hidden'>
            <VisionMobile />
          </div>
          <div className='hidden xl:block mt-20 md:mt-0'>
            <Mission />
          </div>
          <div className='block xl:hidden mt-20 md:mt-0'>
            <MissionMobile />
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
          <div className='-mb-4'>
            <Image src={pyramid} />
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
