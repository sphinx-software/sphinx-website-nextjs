import React, { FunctionComponent, useState } from 'react'
import style from './Contact.module.css'
import Image from 'next/image'

const RequestContact: FunctionComponent = () => {
  const [disable, setDisable] = useState(true)
  const sendContact = (event: any) => {
    event.preventDefault() // don't redirect the page
  }

  return (
    <div className={style.contactMain}>
      <div
        className={
          'max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 pb-6 md:pb-72 md:pt-36 sm:pt-20 leading-11 pt-20 md:pt-28'
        }
      >
        <label className={style.mainLabel}>Contact Us</label>
        <div className={'w-full flex flex-col md:flex-row'}>
          <div className='w-full md:w-1/2 flex flex-col flex-shrink'>
            <form onSubmit={sendContact}>
              <div className={'flex flex-col'}>
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
                  <label className={'font-ABeeZee text-gray-50'}>
                    Phone number
                  </label>
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
                      value='reasonA'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonA'
                    >
                      Reason need help
                    </label>
                  </div>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonB'
                      name='reason'
                      value='reasonB'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonB'
                    >
                      Reason need help
                    </label>
                  </div>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonC'
                      name='reason'
                      value='reasonC'
                      required
                      onClick={() => {
                        setDisable(true)
                      }}
                    />
                    <label
                      className={style.formContactRadioLabel}
                      htmlFor='reasonC'
                    >
                      Reason need help
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
                  <input
                    className={style.formContactInput}
                    id='otherReasonTextInput'
                    name='otherReasonDescription'
                    type='text'
                    disabled={disable}
                  />
                </div>
              </div>
              <div className={'mt-9'}>
                <input
                  className={style.formContactButton}
                  type='submit'
                  id='submit'
                  value='Send'
                />
              </div>
            </form>
          </div>
          <div
            className={
              'w-full md:w-1/2 flex flex-col justify-start items-end pt-20 md:pt-0'
            }
          >
            <div className={'w-full sticky top-0'}>
              <div
                className={
                  'flex justify-start items-center md:items-end w-full flex-col relative'
                }
                style={{ height: 360 }}
              >
                <div className={'absolute z-10 rounded-full mr-4'}>
                  <Image
                    src={'/circle.svg'}
                    height={536}
                    width={536}
                    alt={'circle'}
                  />
                </div>
                <div className='absolute z-0 mt-10 pr-0 md:pr-8'>
                  <Image
                    src={'/contact.svg'}
                    width={428}
                    height={360}
                    alt={'contact'}
                  />
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
