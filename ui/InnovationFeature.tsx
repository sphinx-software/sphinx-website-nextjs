import { FC } from 'react'
import iconVision from './../public/iconVision.svg'
import iconMission from './../public/iconMission.svg'
import Image from 'next/image'
import styles from './../styles/About.module.css'
import { Check } from './icons'

const InnovationFeature = () => {
  return (
    <div className='bg-gray-250'>
      <div className='mx-auto max-w-6xl pt-12 md:pt-20 pb-10 px-2 xl:pb-20 md:px-0'>
        <p className='text-center bg-cover text-32 md:text-36 leading-48 text-gray-350'>
          CREATING THE INNOVATIVE FUTURE
        </p>
        <div className='flex flex-col md:flex-row md:justify-between mt-20'>
          <div>
            <Vision />
          </div>
          <div className='mt-20 md:mt-0'>
            <Mission />
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
            <div className='xl:flex xl:items-center xl:space-x-2'>
              <div className='hidden xl:block'>
                <Check />
              </div>
              <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
                The scalable and high-performance standard.
              </p>
            </div>
            <div className='xl:flex xl:items-center xl:space-x-2'>
              <div className='hidden xl:block'>
                <Check />
              </div>
              <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
                The innovative and creative solutions.
              </p>
            </div>
            <div className='xl:flex xl:items-center xl:space-x-2'>
              <div className='hidden xl:block'>
                <Check />
              </div>
              <p className='text-14 md:text-16 leading-32 text-black-300 text-center'>
                The lifetime warranty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnovationFeature
