import Image from 'next/image'
import React from 'react'
import RequirementImg from '../../public/lineStep1.svg'
import DesignLine from '../../public/lineStep2.svg'
import DevelopmentLine from '../../public/lineStep3.svg'
import DeploymentLine from '../../public/lineStep4.svg'
import Circle from '../../public/circle.svg'
import Analysis from '../../public/analysis.svg'
import Design from '../../public/design.svg'
import Development from '../../public/development.svg'
import Deployment from '../../public/deployment.svg'

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
            <div className='md:flex-1 flex flex-col items-end relative border-r-2 border-solid border-gray-350 border-opacity-20 pb-32'>
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
          <div className='flex'>
            <div className='md:flex-1 border-r-2 border-solid border-gray-350 border-opacity-20 flex justify-center items-center flex-col pt-24 pb-32'>
              <div
                className='relative flex-shrink-0'
                style={{ height: 424, width: 424 }}
              >
                <div className='absolute z-20'>
                  <Image src={Circle} alt={'circle'} />
                </div>
                <div className='absolute z-20'>
                  <Image src={Design} alt={'analysis'} />
                </div>
              </div>
              <div className='mt-12 max-w-26.5'>
                The process divides into two-stage: Internal Design and External
                Design. These stages help determine that the software meets the
                specifications&apos;s goals and improves the product in the
                future.
              </div>
            </div>
            <div className='md:flex-1 flex flex-col items-start justify-start relative'>
              <div
                className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-opacity-20 border-gray-350 absolute top-3 z-20'
                style={{
                  left: -13
                }}
              />
              <div className='hidden md:flex relative pt-10 left-0 w-560 h-800'>
                <div className='absolute top-0 left-32'>
                  <div className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36'>
                    Design
                  </div>
                </div>
                <Image src={DesignLine} alt={'DesignLine'} />
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='md:flex-1 flex flex-col items-end relative border-r-2 border-solid border-gray-350 border-opacity-20 pb-32'>
              <div
                className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-opacity-20 border-gray-350 absolute top-3 z-20'
                style={{
                  right: -13
                }}
              />
              <div className='hidden md:flex relative pt-10 right-0 w-560 h-800'>
                <div className='absolute top-0 '>
                  <div className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36'>
                    Development and Testing
                  </div>
                </div>
                <Image src={DevelopmentLine} alt={'DevelopmentLine'} />
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
                  <Image src={Development} alt={'Development'} />
                </div>
              </div>
              <div className='mt-12 max-w-26.5'>
                Sphinx engineer team write code and convert the design
                documentation into the existing software within the software
                development process.
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='md:flex-1 flex justify-center items-center flex-col pt-24 pb-32'>
              <div
                className='relative w-full h-full'
                style={{ height: 424, width: 424 }}
              >
                <div className='absolute z-20'>
                  <Image src={Circle} alt={'circle'} />
                </div>
                <div className='absolute z-20'>
                  <Image src={Deployment} alt={'Deployment'} />
                </div>
              </div>
              <div className='mt-12 max-w-26.5'>
                The process divides into two-stage: Internal Design and External
                Design. These stages help determine that the software meets the
                specifications&apos;s goals and improves the product in the
                future.
              </div>
            </div>
            <div className='md:flex-1 flex flex-col items-start justify-start relative'>
              <div
                className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-opacity-20 border-gray-350 absolute top-3 z-20'
                style={{
                  top: -3,
                  left: -13
                }}
              />
              <div className='hidden md:flex relative left-0 w-560 h-800'>
                <div className='absolute -top-4 left-32'>
                  <div className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36'>
                    Deployment
                  </div>
                </div>
                <div className='absolute'>
                  <Image src={DeploymentLine} alt={'DeploymentLine'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
