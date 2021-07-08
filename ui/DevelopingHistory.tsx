import { FC, useEffect, useRef } from 'react'
import iconHistory from './../public/iconHistory.svg'
import Image from 'next/image'
import { SECTION, useAboutSection } from './AboutProvider'

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
  const [{ sectionActive }] = useAboutSection()
  useEffect(() => {
    if (sectionActive === SECTION.DEVELOPING_HISTORY) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sectionActive])

  return (
    <div className='bg-white py-16 -mt-1'>
      <div className='mx-auto max-w-7xl pt-4 md:pt-20 pb-10 px-2 xl:pb-20 px-3 md:px-0'>
        <div className='text-center'>
          <p className='text-32 md:text-36 leading-48 text-black-50' ref={ref}>
            Developing history
          </p>
        </div>
        <div className='flex flex-col md:flex-row-reverse md:items-center md:justify-between'>
          <div className='my-10 w-full md:w-7/12 lg:w-5/12'>
            {histories.map((history: HistoryType, index: number) => (
              <History key={index} history={history} />
            ))}
          </div>
          <div className='-mt-6 md:mr-10'>
            <Image src={iconHistory} alt='Sphinx Software' />
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
