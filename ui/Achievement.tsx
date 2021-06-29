import { FC } from 'react'
import Image from 'next/image'
import iconRocket from './../public/iconRocket.svg'
import iconGlobal from './../public/iconGlobal.svg'
import iconReward from './../public/iconReward.svg'

const Achievement: FC = () => {
  return (
    <div className='bg-gray-850'>
      <div className='mx-auto max-w-7xl py-16 md:py-24 px-2 md:px-0 xl:py-28 -mt-0.5'>
        <div>
          <p className='text-36 leading-48 text-white text-center'>
            Achievements
          </p>
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-4 xl:gap-8 place-content-center mt-14 lg:mt-20'>
          <div className='px-3 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50'>
            <Image src={iconRocket} alt='Sphinx Software' />
            <div className='bg-gray-850 text-center w-full py-4 bg-opacity-20 rounded-2xl mt-6 md:min-h-160'>
              <p className='text-16 leading-48'>Expanded the business to</p>
              <p className='text-24 leading-48'>300%</p>
              <p className='text-16 leading-48'>in over six years</p>
            </div>
            <div className='bg-gray-850 text-center w-full mt-6 py-4 bg-opacity-20 rounded-2xl md:min-h-160'>
              <p className='text-16 leading-48'>Revenue increasing at least</p>
              <p className='text-24 leading-48'>20%</p>
              <p className='text-16 leading-48'>each year</p>
            </div>
          </div>
          <div className='px-3 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50 mt-7 md:mt-0'>
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
          <div className='px-3 flex flex-col items-center bg-gray-450 rounded-2xl py-6 text-gray-50 mt-7 md:mt-0'>
            <Image src={iconReward} alt='Sphinx Software' />
            <div className=' text-center w-full py-4 rounded-2xl mt-6 md:min-h-180'>
              <p className='text-16 leading-32'>
                Sphinx contributed to JavaScript Development by joining Node.JS
                Foundation
              </p>
            </div>
            <div className='bg-gray-850 text-center w-full mt-6 py-4 bg-opacity-20 rounded-2xl md:min-h-180'>
              <p className='text-16 leading-48'>Silver Member in</p>
              <p className='text-24 leading-48'>2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievement
