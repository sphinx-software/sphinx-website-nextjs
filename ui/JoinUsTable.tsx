import React, { FunctionComponent } from 'react'
import style from '../styles/JoinUs.module.css'
import Image from 'next/image'

const tableConfig = {
  column: [
    { key: 'position', name: 'Position' },
    { key: 'time', name: 'Time' },
    { key: 'salary', name: 'Salary' }
  ],
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
        <JoinTable columns={tableConfig.column} data={tableConfig.resource} />
      </div>
    </section>
  )
}

declare type JoinTableProps = {
  columns: column[]
  data: data[]
}

const JoinTable: FunctionComponent<JoinTableProps> = ({ columns, data }) => {
  return (
    <div className={'joinTable pb-44 w-full flex justify-center'}>
      <table className={'overflow-hidden border-collapse rounded-3xl w-4/5'}>
        <tr style={{ backgroundColor: 'rgba(189, 199, 205, 0.3)' }}>
          {columns.map((column) => {
            return (
              <th key={column.key} className={'p-6 text-left'}>
                <span className={'text-gray-50'}>{column.name}</span>
              </th>
            )
          })}
        </tr>
        {data.map((row, index) => {
          return (
            <tr key={index}>
              <td className={'text-white bg-gray-450 p-6'}>{row.position}</td>
              <td className={'text-white bg-gray-450 p-6'}>{row.time}</td>
              <td className={'text-white bg-gray-450 p-6'}>{row.salary}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default JoinUsTable
