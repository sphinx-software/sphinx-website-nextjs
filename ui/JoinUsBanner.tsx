import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ApplyJobModal = dynamic(() => import('./ApplyJobModal'), {
  ssr: false
})

const JoinUsBanner = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div
      className={'bg-bottom bg-cover'}
      style={{
        backgroundImage: "url('/bgBConnerUp.svg')"
      }}
    >
      <div className={'mx-auto max-w-7xl flex items-center flex-col'}>
        <div className={'w-full md:w-2/3 mx:auto pt-44'}>
          <p className='text-center text-36 leading-32 text-white pb-6'>
            Leading technology company in Vietnam
          </p>
          <p className='text-center text-gray-350 text-16 leading-32 text-white pb-6'>
            Providing the most professional technology services for clients
            worldwide with.
          </p>
        </div>
        <div className={'pb-80'}>
          <button onClick={() => setIsShow(!isShow)} className={'btn-grad'}>
            Apply Now
          </button>
        </div>
      </div>
      <ApplyJobModal isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}

export default JoinUsBanner
