import { FC } from 'react'
import { History as HistoryType } from '../config'
import { useConfig } from './ConfigProvider'
import iconHistory from './../public/iconHistory.svg'
import Image from 'next/image'

const DevelopingHistory: FC = () => {
  const { histories } = useConfig()
  return (
    <div className='bg-white py-16'>
      <div className='mx-auto max-w-6xl pt-4 md:pt-20 pb-10 px-2 xl:pb-20 md:px-0'>
        <div className='text-center'>
          <p className='text-32 md:text-36 leading-48 text-black-50'>
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