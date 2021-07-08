import React, { FunctionComponent, useEffect, useState } from 'react'
import style from '../styles/JoinUs.module.css'
import { NextRouter } from 'next/router'
import Image from 'next/image'
import Modal from 'react-modal'
import Select from 'react-select'
import { tableConfig } from '../config'
import Loader from 'react-loader-spinner'
import { sendRequestJobEmail } from '../services/sendEmail'

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
      <div className={'mx-3 max-w-7xl flex flex-col -my-1 md:my-0'}>
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
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    let currentContent = data.find((job) => job.id === currentJob)
    if (!currentContent) currentContent = data[0]

    setContent(currentContent)
  }, [currentJob, data])

  return (
    <div className={'pb-44 w-full flex flex-col justify-center'}>
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
            <button onClick={() => setIsShow(true)} className={'btn-grad'}>
              Apply Now
            </button>
          </td>
        </tr>
      </table>
      <ApplyJobModal isShow={isShow} setIsShow={setIsShow} jobId={currentJob} />
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

export const ApplyJobModal: FunctionComponent<{
  isShow: boolean
  setIsShow: (value: boolean) => void
  jobId?: string
}> = ({ isShow, setIsShow, jobId }) => {
  const [submitting, setSubmitting] = useState(false)
  const [currentWidth, setWidth] = useState('40%')

  const selectOption = tableConfig.resource.map((item) => {
    return {
      value: item.id,
      label: item.position
    }
  })
  const sendRequestJob = (event: any) => {
    event.preventDefault()
    sendRequestJobEmail(event, setSubmitting)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setWidth('40%')
      } else {
        if (window.innerWidth > 768) {
          setWidth('50%')
        } else {
          if (window.innerWidth > 640) {
            setWidth('80%')
          } else {
            setWidth('90%')
          }
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])

  const customStyles = {
    overlay: {
      zIndex: 100
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-30%',
      transform: 'translate(-50%, -50%)',
      height: 'auto',
      width: currentWidth
    }
  }

  return (
    <div className={'w-full'}>
      <Modal
        isOpen={isShow}
        onRequestClose={() => setIsShow(false)}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <div className={'flex flex-col px-6 py-6'}>
          <div className={'flex justify-between'}>
            <p className={'text-36 leading-32 text-black-300 pb-6'}>Join Us</p>
            <button
              className='items-center justify-center focus:outline-none'
              onClick={() => {
                setIsShow(false)
              }}
            >
              <div
                className='bg-gray-150 rounded-full'
                style={{ width: 40, height: 40 }}
              >
                <Image
                  src={'/iconClose.svg'}
                  width={55}
                  height={55}
                  alt={'close'}
                />
              </div>
            </button>
          </div>
          <form onSubmit={sendRequestJob}>
            <div className={'flex flex-col pb-6'}>
              <p className={'text-16 leading-32 text-gray-350'}>Position</p>
              <div>
                <Select
                  options={selectOption}
                  isSearchable={true}
                  name={'position'}
                  defaultValue={selectOption.find(
                    (item) => item.value === jobId
                  )}
                />
              </div>
            </div>
            <div className={'flex flex-col pb-6'}>
              <p className={'text-16 leading-32 text-gray-350'}>Full name</p>
              <div>
                <input
                  className={style.joinUsFormInput}
                  id='name'
                  type='text'
                  required
                />
              </div>
            </div>
            <div className={'flex flex-col md:flex-row w-full pb-6'}>
              <div className={'flex flex-col w-full md:w-3/5 mr-6'}>
                <p className={'text-16 leading-32 text-gray-350'}>Email</p>
                <div>
                  <input
                    className={style.joinUsFormInput}
                    id='email'
                    type='text'
                    required
                  />
                </div>
              </div>
              <div className={'flex flex-col w-full md:w-2/5'}>
                <p className={'text-16 leading-32 text-gray-350'}>
                  Phone number
                </p>
                <div>
                  <input
                    className={style.joinUsFormInput}
                    id='phoneNumber'
                    type='text'
                  />
                </div>
              </div>
            </div>
            <div className={'flex flex-col pb-6'}>
              <p className={'text-16 leading-32 text-gray-350'}>Your CV</p>
              <div>
                <input
                  className={style.joinUsFormInput}
                  id='cvLink'
                  type='text'
                  placeholder={'Attach link'}
                  required
                />
              </div>
            </div>
            <button className='btn-grad flex' type='submit' id='submit'>
              <div className={'flex items-center'}>
                <p>Send</p>
                <div className={'pl-1'}>
                  <Loader
                    visible={submitting}
                    type='Oval'
                    color='#FFFFFF'
                    height={16}
                    width={16}
                  />
                </div>
              </div>
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default JoinUsDetail
