import React, { FunctionComponent, useEffect, useState } from 'react'
import { tableConfig } from '../config'
import { sendRequestJobEmail } from '../services/sendEmail'
import Modal from 'react-modal'
import Image from 'next/image'
import style from '../styles/JoinUs.module.css'
import Loader from 'react-loader-spinner'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import useWindowDimensions from '../services/useWindowDimensions'
import { screen } from '../config'

const ApplyJobModal: FunctionComponent<{
  isShow: boolean
  setIsShow: (value: boolean) => void
  jobId?: string
}> = ({ isShow, setIsShow, jobId = tableConfig.resource[0].id }) => {
  const [submitting, setSubmitting] = useState(false)
  const { width } = useWindowDimensions()
  const customStyles = {
    overlay: {
      zIndex: 100,
      backgroundColor: 'rgba(14, 28, 28, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-30%',
      transform: 'translate(-50%, -50%)',
      height: 'auto',
      width: width < screen.md ? '90%' : width < screen.lg ? '60%' : '40%'
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
          <Formik
            initialValues={{
              position: jobId,
              name: '',
              email: '',
              cvLink: '',
              phoneNumber: ''
            }}
            onSubmit={(values) => {
              setSubmitting(true)
              sendRequestJobEmail(values)
                .then(() => {
                  setSubmitting(false)
                  toast.success('Send Apply Job Email Success', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                })
                .catch(() => {
                  setSubmitting(false)
                  toast.error("Can't Send Apply Job Email!", {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                  })
                })
            }}
            validate={(values) => {
              let errors: Record<string, string> = {}
              if (!values.position) {
                errors.position = 'Position is required'
              }
              if (!values.name) {
                errors.name = 'Name is required'
              }
              if (!values.email) {
                errors.email = 'Email is required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              if (!values.cvLink) {
                errors.cvLink = 'Attach link is required'
              }
              if (
                values.phoneNumber &&
                !/^[+]*[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/g.test(
                  values.phoneNumber
                )
              ) {
                errors.phoneNumber = 'Phone number is valid'
              }
              return errors
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={'flex flex-col pb-6'}>
                  <p className={style.formInputRequiredLabel}>Position</p>
                  <div>
                    <Field
                      className={`w-full px-3 h-12 border border-solid rounded-lg bg-white ${
                        errors.position && touched.position
                          ? 'border-red-origin'
                          : 'border-gray-250'
                      }`}
                      as={'select'}
                      name={'position'}
                      id={'position'}
                    >
                      {tableConfig.resource.map((item, index) => {
                        return (
                          <option key={index} value={item.id}>
                            {item.position}
                          </option>
                        )
                      })}
                    </Field>
                    <ErrorMessage name='position'>
                      {(msg) => <p className={'text-red-origin'}>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className={'flex flex-col pb-6'}>
                  <p className={style.formInputRequiredLabel}>Full name</p>
                  <div>
                    <Field
                      className={`w-full px-3 h-12 border border-solid border-gray-250 rounded-lg ${
                        errors.name && touched.name
                          ? 'border-red-origin'
                          : 'border-gray-250'
                      }`}
                      id={'name'}
                      name={'name'}
                    />
                    <ErrorMessage name='name'>
                      {(msg) => <p className={'text-red-origin'}>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className={'flex flex-col md:flex-row w-full pb-6'}>
                  <div className={'flex flex-col w-full md:w-3/5 mr-6'}>
                    <p className={style.formInputRequiredLabel}>Email</p>
                    <div>
                      <Field
                        className={`w-full px-3 h-12 border border-solid border-gray-250 rounded-lg ${
                          errors.email && touched.email
                            ? 'border-red-origin'
                            : 'border-gray-250'
                        }`}
                        id={'email'}
                        name={'email'}
                      />
                      <ErrorMessage name='email'>
                        {(msg) => <p className={'text-red-origin'}>{msg}</p>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className={'flex flex-col w-full md:w-2/5'}>
                    <p className={'text-16 leading-32 text-gray-350'}>
                      Phone number
                    </p>
                    <div>
                      <Field
                        className={`w-full px-3 h-12 border border-solid rounded-lg ${
                          errors.phoneNumber && touched.phoneNumber
                            ? 'border-red-origin'
                            : 'border-gray-250'
                        }`}
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                      />
                      <ErrorMessage name='phoneNumber'>
                        {(msg) => <p className={'text-red-origin'}>{msg}</p>}
                      </ErrorMessage>
                    </div>
                  </div>
                </div>
                <div className={'flex flex-col pb-6'}>
                  <p className={style.formInputRequiredLabel}>Your CV</p>
                  <div>
                    <Field
                      className={`w-full px-3 h-12 border border-solid rounded-lg ${
                        errors.cvLink && touched.cvLink
                          ? 'border-red-origin'
                          : 'border-gray-250'
                      }`}
                      id={'cvLink'}
                      name={'cvLink'}
                      placeholder={'Attach link'}
                    />
                    <ErrorMessage name='cvLink'>
                      {(msg) => <p className={'text-red-origin'}>{msg}</p>}
                    </ErrorMessage>
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
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    </div>
  )
}

export default ApplyJobModal
