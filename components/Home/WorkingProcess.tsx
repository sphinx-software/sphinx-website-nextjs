import Image from 'next/image'
import React from 'react'
import RequirementImg from '../../public/lineStep1.svg'
import Circle from '../../public/circle.svg'
import Analysis from '../../public/analysis.svg'

export default function WorkingProcess(): JSX.Element {
  return (
    <div className='bg-gray-850'>
      <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 md:pt-36 sm:pt-20 leading-11'>
        <div className='text-white w-full'>
          <div className='text-32 text-center'>Working process</div>
          <div className='max-w-3xl text-center mx-auto pt-8'>
            Sphinx workflow based on agile scrum methodology has agility and
            adaptability, creativity and innovation with lower costs, quality
            improvement, and maximization of company synergy.
          </div>
        </div>
        <div className='text-white pt-24'>
          <div className='flex'>
            <div className='md:flex-1 flex flex-col items-end relative border-r-2 border-solid border-gray-350 border-opacity-20'>
              <div
                className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-opacity-20 border-gray-350 absolute top-3 z-20'
                style={{
                  right: -13
                }}
              />
              <div className='hidden md:flex relative pt-10 right-0 w-560 h-800'>
                <div className='absolute top-0 '>
                  <div className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36'>
                    Requirement&apos;s analysis
                  </div>
                </div>
                <Image src={RequirementImg} alt={'RequirementImg'} />
              </div>
            </div>
            <div className='flex-1 flex justify-center items-center flex-col'>
              <div
                className='relative flex-shrink-0'
                style={{ height: 424, width: 424 }}
              >
                <div className='absolute z-20'>
                  <Image src={Circle} alt={'circle'} />
                </div>
                <div className='absolute z-20'>
                  <Image src={Analysis} alt={'analysis'} />
                </div>
              </div>
              <div className='mt-12 max-w-26.5'>
                After receiving inquiries from customer, the Sphinx team will
                indicate the project scope and create a plan to gain engagement
                with customers by using tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
