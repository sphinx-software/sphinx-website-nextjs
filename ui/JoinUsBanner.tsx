import React from 'react'
import style from '../styles/JoinUs.module.css'

const JoinUsBanner = () => {
  return (
    <div
      className={'bg-bottom bg-cover'}
      style={{
        backgroundImage: "url('/bgBConnerUp.svg')"
      }}
    >
      <div className={'mx-auto max-w-6xl flex items-center flex-col'}>
        <div className={'w-full md:w-2/3 mx:auto pt-44'}>
          <p className='text-center text-36 leading-32 text-white pb-6'>
            Leading technology company in Vietnam
          </p>
          <p className='text-center text-16 leading-32 text-white pb-6'>
            Providing the most professional technology services for clients
            worldwide with.
          </p>
        </div>
        <div className={'pb-80'}>
          <button className={style.buttonJoinUs}>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JoinUsBanner
