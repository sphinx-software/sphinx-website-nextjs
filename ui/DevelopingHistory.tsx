import React, { FC, useRef } from 'react'
import iconHistory from './../public/iconHistory.svg'
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll'
import { Element } from 'react-scroll'
import { SECTION } from './AboutProvider'

export declare type HistoryType = {
  year: number
  content: string
}

export const histories: HistoryType[] = [
  {
    year: 2020,
    content: 'Penetrated the Australian market.'
  },
  {
    year: 2019,
    content:
      'Provided the technology solutions for ASEAN, Europe, and US market'
  },
  {
    year: 2018,
    content: 'Begin mobile application development.'
  },
  {
    year: 2017,
    content: 'Become the Silver member of Node.JS Foundation.'
  },
  {
    year: 2016,
    content: 'Established the loT and Robotics Development Laboratory'
  },
  {
    year: 2015,
    content:
      'Established Sphinx Technology Company Software development and consultants.'
  }
]

const DevelopingHistory: FC = () => {
  const ref = useRef<any>(null)

  return (
    <div className='bg-white -mt-1'>
      <div className='mx-auto max-w-7xl py-20 px-6 md:px-0'>
        <div className='text-center'>
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
            <Element name={SECTION.DEVELOPING_HISTORY}>
              <p className='text-32 md:text-36 leading-48 text-black-50'>
                Developing history
              </p>
            </Element>
          </ScrollAnimation>
        </div>
        <div className='flex flex-col lg:flex-row-reverse md:items-center md:justify-around mt-20'>
          <div className='flex-1 flex justify-center'>
            <div className='w-full md:w-8/12 pb-20 lg:pb-0'>
              {histories.map((history: HistoryType, index: number) => (
                <ScrollAnimation
                  key={index}
                  animateIn='animate__fadeInUp'
                  delay={((index + 1) * 1000) / 6}
                  animateOnce
                >
                  <History key={index} history={history} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
          <div className='flex-1 -mt-6 lg:mt-0 md:mr-10 w-full md:w-8/12 lg:w-full flex justify-center items-center'>
            <ScrollAnimation animateIn='animate__fadeIn'>
              <Image src={iconHistory} alt='Sphinx Software' />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}

const History: FC<{ history: HistoryType }> = ({ history }) => {
  return (
    <div className='flex space-x-6 py-5'>
      <p className='text-24 leading-24 text-gray-350'>{history.year}</p>
      <p className='text-black-300 text-16 leading-32 -mt-2'>
        {history.content}
      </p>
    </div>
  )
}

export default DevelopingHistory
