import React, { FunctionComponent, useState } from 'react'
import style from './Contact.module.css'
import Image from 'next/image'
import CircleBackground from '../../public/circle.svg'
import IconContact from '../../public/contact.svg'
import emailJs from 'emailjs-com'
import {emailConfig} from '../../config'
import Loader from 'react-loader-spinner'
import { sendContactUsEmail } from '../../services/sendEmail'

emailJs.init(emailConfig.user_id)

const RequestContact: FunctionComponent = () => {
  const [disable, setDisable] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const sendContact = (event: any) => {
    event.preventDefault();
    sendContactUsEmail(event, setSubmitting);
  }

  return (
    <div className={style.contactMain}>
      <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-6 md:pb-10 leading-11 pt-20 md:pt-10'>
        <label className={style.mainLabel}>Contact Us</label>
        <div className='md:flex'>
          <div className='flex-1 flex flex-col flex-shrink'>
            <form onSubmit={sendContact}>
              <div className='flex flex-col focus:outline-none'>
                <label className={style.formContactLabel}>Name</label>
                <input
                  className={style.formContactInput}
                  id='name'
                  type='text'
                  required
                  onInvalid={(event: any) => {
                    event.target.setCustomValidity('Name must be required!')
                  }}
                  onInput={(event: any) => {
                    event.target.setCustomValidity('')
                  }}
                />
              </div>
              <div className={'flex flex-col pt-6'}>
                <label className={style.formContactLabel}>Company name</label>
                <input
                  className={style.formContactInput}
                  id='companyName'
                  type='text'
                  required
                  onInvalid={(event: any) => {
                    event.target.setCustomValidity(
                      'Company Name must be required!'
                    )
                  }}
                  onInput={(event: any) => {
                    event.target.setCustomValidity('')
                  }}
                />
              </div>
              <div className={'flex flex-col md:flex-row w-full'}>
                <div
                  className={
                    'flex flex-col pt-6 w-full md:w-3/5 md:pr-6 flex-shrink'
                  }
                >
                  <label className={style.formContactLabel}>Work email</label>
                  <input
                    className={style.formContactInput}
                    id='workEmail'
                    type='text'
                    required
                    onInvalid={(event: any) => {
                      event.target.setCustomValidity(
                        'WorkEmail must be required!'
                      )
                    }}
                    onInput={(event: any) => {
                      event.target.setCustomValidity('')
                    }}
                  />
                </div>
                <div
                  className={'flex flex-col pt-6 w-auto md:w-2/5 flex-shrink'}
                >
                  <label className={'text-gray-50'}>Phone number</label>
                  <input
                    className={style.formContactInput}
                    id='phoneNumber'
                    type='text'
                  />
                </div>
              </div>
              <div className={'flex flex-col pt-6'}>
                <label className={style.formContactLabel}>
                  I need help with ...
                </label>
                <div className={'flex flex-col'}>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonA'
                      name='reason'
                      value='Website Development'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonA'
                    >
                      Website Development
                    </label>
                  </div>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonB'
                      name='reason'
                      value='Mobile App Development'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonB'
                    >
                      Mobile App Development
                    </label>
                  </div>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonC'
                      name='reason'
                      value='IT Managed Services'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonC'
                    >
                      IT Managed Services
                    </label>
                  </div>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='otherReason'
                      name='reason'
                      value='otherReason'
                      required
                      onClick={() => {
                        setDisable(false)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='otherReason'
                    >
                      Other
                    </label>
                  </div>
                  {!disable && (
                    <input
                      className={style.formContactInput}
                      id='otherReasonTextInput'
                      name='otherReasonDescription'
                      type='text'
                    />
                  )}
                </div>
              </div>
              <div className={'mt-9'}>
                <button
                  className='btn-grad flex'
                  type='submit'
                  id='submit'
                >
                  <div className={'flex items-center'}>
                    <p>Submit</p>
                    <div className={'pl-1'}>
                      <Loader visible={submitting} type="Oval" color="#FFFFFF" height={16} width={16}/>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className='flex-1 flex flex-col justify-start items-end md:pt-0'>
            <div className={'w-full sticky top-0'}>
              <div
                className='flex justify-start items-center md:items-end w-full flex-col relative'
                style={{ height: 360 }}
              >
                <div className='absolute z-10 rounded-full mr-4'>
                  <Image src={CircleBackground} alt={'circle'} />
                </div>
                <div className='absolute z-0 mt-10 pr-0 md:pr-8'>
                  <Image src={IconContact} alt={'contact'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestContact
