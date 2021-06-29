import React, { FunctionComponent } from 'react'
import style from '../styles/JoinUs.module.css'
import Image from 'next/image'

const tableConfig = {
  resource: [
    { position: 'Reception', time: 'Fulltime', salary: '800$' },
    { position: 'QA/Tester Mobile', time: 'Fulltime', salary: '1200$' },
    { position: 'UI/UX Designer', time: 'Fulltime', salary: '1500$' },
    {
      position: 'Software Engineer (PHP/NodeJS)',
      time: 'Fulltime',
      salary: '2000$'
    }
  ]
}

type column = {
  key: string
  name: string
}

type data = {
  position: string
  time: string
  salary: string
}

const JoinUsTable: FunctionComponent = () => {
  return (
    <section className={style.joinUsMain}>
      <div className={'mx-auto max-w-6xl flex items-center flex-col'}>
        <div className={'pb-12 w-full md:w-2/3 mx:auto flex justify-center'}>
          <button className='border rounded-full px-4 py-2 border-gray-350 text-white text-center'>
            <div className={'flex'}>
              <Image
                src={'/iconLocationYellow.svg'}
                height={16}
                width={14}
                alt={'location'}
              />
              <p className='text-16 leading-19 pl-2'>Ha Noi</p>
            </div>
          </button>
        </div>
        <JoinTable data={tableConfig.resource} />
      </div>
    </section>
  )
}

declare type JoinTableProps = {
  data: data[]
}

const JoinTable: FunctionComponent<JoinTableProps> = ({ data }) => {
  return (
    <div className={'joinTable pb-44 w-full flex justify-center px-6 md:px-0 '}>
      <table
        className={
          'overflow-hidden rounded-3xl w-full md:w-2/3 bg-gray-850 bg-opacity-10'
        }
        style={{ boxShadow: '0px 0px 50px rgba(14, 28, 28, 0.05)' }}
      >
        <tr className={'bg-gray-380'}>
          <th
            className={
              'p-6 text-left border-b border-gray-250 border-opacity-10'
            }
          >
            <span className={'text-gray-50'}>Position</span>
          </th>
          <th
            className={
              'p-6 text-left border-b border-gray-250 border-opacity-10'
            }
          >
            <span className={'text-gray-50'}>Time</span>
          </th>
          <th
            className={`p-6 text-left hidden border-b border-gray-250 border-opacity-10 md:table-cell`}
          >
            <span className={'text-gray-50'}>Salary</span>
          </th>
        </tr>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              <td
                className={
                  'text-white bg-gray-450 p-6 border-b border-gray-250 border-opacity-10'
                }
              >
                {row.position}
              </td>
              <td
                className={
                  'text-white bg-gray-450 p-6 border-b border-gray-250 border-opacity-10'
                }
              >
                {row.time}
              </td>
              <td
                className={
                  'text-white bg-gray-450 p-6 hidden border-b border-gray-250 border-opacity-10 md:table-cell'
                }
              >
                {row.salary}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default JoinUsTable
