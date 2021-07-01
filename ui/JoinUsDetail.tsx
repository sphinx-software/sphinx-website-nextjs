import React, { FunctionComponent, useEffect, useState } from 'react'
import style from '../styles/JoinUs.module.css'
import { NextRouter } from 'next/router'
import { router } from 'next/client'
import Image from 'next/image'

type detailJob = {
  title: string
  contents: string[] | []
}

type Job = {
  id: string
  position: string
  time: string
  salary: string
  description: detailJob[]
}

const JoinUsDetail: FunctionComponent<{
  resource: Job[]
  activeJob?: string
  router: NextRouter
}> = ({ resource, activeJob, router }) => {
  const [currentSelection, setCurrentSelection] = useState(
    activeJob || resource[0].id
  )

  useEffect(() => {
    const { id } = router.query
    if (id !== currentSelection) {
      router
        .push(
          {
            pathname: `/join-us/${currentSelection}`
          },
          undefined,
          { shallow: true }
        )
        .then(() => {})
    }
  }, [currentSelection])

  return (
    <div className={style.joinUsDetailMain}>
      <div className={'mx-3 md:mx-16 max-w-full flex flex-col -my-1 md:my-0'}>
        <div className={'pb-12 w-full mx:auto flex justify-center'}>
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
        <div className={'w-full flex'}>
          <div className={'w-full md:w-3/4 mr-0 md:mr-6'}>
            <JoinTableDescription
              data={resource}
              currentJob={currentSelection}
            />
          </div>
          <div className={'w-0 md:w-1/4 hidden md:table sticky top-0.5'}>
            <JoinTableMenu
              data={resource}
              currentJob={currentSelection}
              setCurrentJob={setCurrentSelection}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const JoinTableDescription: FunctionComponent<{
  data: Job[]
  currentJob: string
}> = ({ data, currentJob }) => {
  const [content, setContent] = useState(data[0])

  useEffect(() => {
    let currentContent = data.find((job) => job.id === currentJob)
    if (!currentContent) currentContent = data[0]

    setContent(currentContent)
  }, [currentJob, data])

  return (
    <div className={'joinTable pb-44 w-full flex justify-center'}>
      <table
        className={
          'overflow-hidden rounded-3xl w-full bg-gray-850 bg-opacity-10'
        }
        style={{ boxShadow: '0px 0px 50px rgba(14, 28, 28, 0.05)' }}
      >
        <tr className={'bg-gray-380'}>
          <th
            className={
              'p-6 text-left border-b border-gray-250 border-opacity-10'
            }
          >
            <p className={'text-white leading-19 text-16 font-normal'}>
              {content.position}
            </p>
          </th>
        </tr>
        <tr className={'border-b border-gray-250 border-opacity-10'}>
          <td className={`text-white bg-gray-450 p-6`}>
            {content.description.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col ${index === 0 && 'pt-12'}`}
                >
                  <span className={'text-gray-250 leading-19 text-16'}>
                    {item.title}
                  </span>
                  <div className={'jobContentDetail'}>
                    <ul className={'pb-16 list-disc pl-6'}>
                      {item.contents.map((itemContent, itemContentIndex) => (
                        <li key={`jobContent-${index}-${itemContentIndex}`}>
                          {itemContent}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
            <button className={style.buttonJoinUs}>Apply Now</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

const JoinTableMenu: FunctionComponent<{
  data: Job[]
  currentJob: string
  setCurrentJob: (value: string) => void
}> = ({ data, currentJob, setCurrentJob }) => {
  return (
    <div className={'joinTable pb-44 w-full flex justify-center'}>
      <table
        className={
          'overflow-hidden rounded-3xl w-full bg-gray-850 bg-opacity-10'
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
        </tr>
        {data.map((row, index) => {
          return (
            <tr
              key={index}
              onClick={() => {
                setCurrentJob(row.id)
              }}
              className={'border-b border-gray-250 border-opacity-10'}
            >
              <td
                className={`text-white bg-gray-450 p-6 ${
                  row.id === currentJob &&
                  'border-l-4 border-yellow-450 bg-gray-550'
                }`}
              >
                {row.position}
              </td>
              <td
                className={`text-white bg-gray-450 p-6 ${
                  row.id === currentJob && 'bg-gray-550'
                }`}
              >
                {row.time}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default JoinUsDetail