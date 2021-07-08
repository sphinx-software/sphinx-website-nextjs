import React, { FunctionComponent, useState } from 'react'
import style from './Contact.module.css'
import Image from 'next/image'
import CircleBackground from '../../public/circle.svg'
import IconContact from '../../public/contact.svg'
import emailJs from 'emailjs-com'
import { emailConfig } from '../../config'
import Loader from 'react-loader-spinner'
import { sendContactUsEmail } from '../../services/sendEmail'
import { useFormik } from 'formik'
import classNames from 'classnames'

emailJs.init(emailConfig.user_id)

const RequestContact: FunctionComponent = () => {
  const [disable, setDisable] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      companyName: '',
      workEmail: '',
      phoneNumber: '',
      reason: ''
    },
    onSubmit: (values) => {
      sendContactUsEmail(values, setSubmitting)
    },
    validate: (values) => {
      let errors: Record<string, string> = {}
      if (!values.name) {
        errors.name = 'Name is required'
      }
      if (!values.workEmail) {
        errors.workEmail = 'Work email is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.workEmail)
      ) {
        errors.workEmail = 'Invalid email address'
      }
      if (!values.companyName) {
        errors.companyName = 'Company name is required'
      }
      if (!values.reason) {
        errors.reason = 'Reason is required'
      }
      if (
        values.phoneNumber &&
        !/^[+]*[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/g.test(values.phoneNumber)
      ) {
        errors.phoneNumber = 'Phone number is valid'
      }
      return errors
    }
  })

  return (
    <div className={style.contactMain}>
      <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pb-6 md:pb-10 leading-11 pt-20 md:pt-10'>
        <label className={style.mainLabel}>Contact Us</label>
        <div className='md:flex'>
          <div className='flex-1 flex flex-col flex-shrink'>
            <form onSubmit={formik.handleSubmit}>
              <div className='flex flex-col' style={{ height: 120 }}>
                <label className={style.formContactLabel}>Name</label>
                <input
                  className={classNames(
                    [style.formContactInput],
                    [formik.errors.name ? 'ring-2 ring-orange-450' : '']
                  )}
                  id='name'
                  name='name'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name && (
                  <span className='-mt-3 text-orange-450'>
                    {formik.errors.name}
                  </span>
                )}
              </div>
              <div className={'flex flex-col'} style={{ height: 120 }}>
                <label className={style.formContactLabel}>Company name</label>
                <input
                  className={classNames(
                    [style.formContactInput],
                    [formik.errors.companyName ? 'ring-2 ring-orange-450' : '']
                  )}
                  id='companyName'
                  name='companyName'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.companyName}
                />
                {formik.errors.companyName && (
                  <span className='-mt-3 text-orange-450'>
                    {formik.errors.companyName}
                  </span>
                )}
              </div>
              <div className={'flex flex-col md:flex-row w-full'}>
                <div
                  className={
                    'flex flex-col w-full md:w-3/5 md:pr-6 flex-shrink'
                  }
                  style={{ height: 120 }}
                >
                  <label className={style.formContactLabel}>Work email</label>
                  <input
                    className={classNames(
                      [style.formContactInput],
                      [formik.errors.workEmail ? 'ring-2 ring-orange-450' : '']
                    )}
                    id='workEmail'
                    name='workEmail'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.workEmail}
                  />
                  {formik.errors.workEmail && (
                    <span className='-mt-3 text-orange-450'>
                      {formik.errors.workEmail}
                    </span>
                  )}
                </div>
                <div
                  className={'flex flex-col w-auto md:w-2/5 flex-shrink'}
                  style={{ height: 120 }}
                >
                  <label className={'text-gray-50'}>Phone number</label>
                  <input
                    className={classNames(
                      [style.formContactInput],
                      [
                        formik.errors.phoneNumber
                          ? 'ring-2 ring-orange-450'
                          : ''
                      ]
                    )}
                    id='phoneNumber'
                    name='phoneNumber'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
                  {formik.errors.phoneNumber && (
                    <span className='-mt-3 text-orange-450'>
                      {formik.errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <div className={'flex flex-col'}>
                <label className={style.formContactLabel}>
                  I need help with ...
                </label>
                <div className={'flex flex-col'}>
                  <div className={'leading-normal py-2 contactRadio'}>
                    <input
                      type='radio'
                      id='reasonA'
                      name='reason'
                      onClick={() => {
                        setDisable(true)
                        formik.setFieldValue('reason', 'Website Development')
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
                      onClick={() => {
                        setDisable(true)
                        formik.setFieldValue('reason', 'Mobile App Development')
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
                      onClick={() => {
                        setDisable(true)
                        formik.setFieldValue('reason', 'IT Managed Services')
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
                      onClick={() => {
                        setDisable(false)
                        formik.setFieldValue('reason', '')
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
                      className={classNames(
                        [style.formContactInput],
                        [formik.errors.reason ? 'ring-2 ring-orange-450' : '']
                      )}
                      id='otherReasonTextInput'
                      name='reason'
                      type='text'
                      onChange={formik.handleChange}
                      value={formik.values.reason}
                    />
                  )}
                </div>
                {formik.errors.reason && (
                  <span className='-mt-3 text-orange-450'>
                    {formik.errors.reason}
                  </span>
                )}
              </div>
              <div className={'mt-9'}>
                <button className='btn-grad flex' type='submit' id='submit'>
                  <div className={'flex items-center'}>
                    <p>Submit</p>
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
