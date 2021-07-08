import React, { FunctionComponent, useEffect, useState } from 'react'
import { tableConfig } from '../config'
import { sendRequestJobEmail } from '../services/sendEmail'
import Modal from 'react-modal'
import Image from 'next/image'
import Select from 'react-select'
import style from '../styles/JoinUs.module.css'
import Loader from 'react-loader-spinner'

const ApplyJobModal: FunctionComponent<{
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

export default ApplyJobModal
