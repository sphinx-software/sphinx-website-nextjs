import Image from 'next/image'
import React from 'react'
import RequirementLine from '../../public/lineStep1.svg'
import RequirementLineM from '../../public/lineStep1-mobile.svg'
import DesignLine from '../../public/lineStep2.svg'
import DesignLineM from '../../public/lineStep2-mobile.svg'
import DevelopmentLine from '../../public/lineStep3.svg'
import DevelopmentLineM from '../../public/lineStep3-mobile.svg'
import DeploymentLine from '../../public/lineStep4.svg'
import DeploymentLineM from '../../public/lineStep4-mobile.svg'
import Circle from '../../public/circle.svg'
import Analysis from '../../public/analysis.svg'
import Design from '../../public/design.svg'
import Development from '../../public/development.svg'
import Deployment from '../../public/deployment.svg'
import ScrollAnimation from 'react-animate-on-scroll'

export default function WorkingProcess(): JSX.Element {
  return (
    <div className='bg-gray-850'>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 md:pt-36 pt-20 pb-20'>
        <div className='text-white w-full'>
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
            <h2 className='text-white font-normal text-36 text-center leading-56'>
              Working process
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            delay={450}
            animateOnce
          >
            <h3 className='max-w-3xl mx-auto text-center text-gray-350 text-16 py-2 leading-36'>
              Sphinx workflow based on agile scrum methodology has agility and
              adaptability, creativity and innovation with lower costs, quality
              improvement, and maximization of company synergy.
            </h3>
          </ScrollAnimation>
        </div>
        <div className='pt-20'>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 flex flex-col justify-center items-start md:items-end border-l-2 md:border-l-0 md:border-r-2 border-solid border-gray-233031'>
              <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
                <div
                  className='pl-4 md:pl-0 pr-0 md:pr-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36 -mt-6'
                  style={{ width: 'fit-content', blockSize: 'fit-content' }}
                >
                  Requirement&apos;s analysis
                </div>
              </ScrollAnimation>
              <div className='relative mt-20'>
                <div className='absolute -left-3 md:left-auto md:-right-3 -top-44 lg:-top-28'>
                  <div className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-gray-233031' />
                </div>
                <div className='hidden md:block'>
                  <Image
                    src={RequirementLine}
                    alt={'RequirementLine'}
                    priority
                  />
                </div>
                <div className='md:hidden'>
                  <Image
                    src={RequirementLineM}
                    alt={'RequirementLine'}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center border-l-2 md:border-l-0 border-solid border-gray-233031'>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='relative mt-20 px-3'>
                  <div className='absolute md:-left-24 md:-bottom-20'>
                    <Image src={Circle} alt={'circle'} />
                  </div>
                  <div>
                    <Image src={Analysis} alt={'analysis'} />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='mt-12 max-w-26.5 leading-8 text-gray-350 px-3'>
                  After receiving inquiries from customer, the Sphinx team will
                  indicate the project scope and create a plan to gain
                  engagement with customers by using tools
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='flex-1 flex flex-col justify-center items-center border-l-2 md:border-l-0 border-r-0 md:border-r-2 border-solid border-gray-233031'>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='relative mt-20 px-3'>
                  <div className='absolute md:-right-24 md:-bottom-20'>
                    <Image src={Circle} alt={'circle'} />
                  </div>
                  <div>
                    <Image src={Design} alt={'Design'} />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='mt-12 max-w-26.5 leading-8 text-gray-350 px-3'>
                  The process divides into two-stage: Internal Design and
                  External Design. These stages help determine that the software
                  meets the specifications goals and improves the product in the
                  future.
                </div>
              </ScrollAnimation>
            </div>
            <div className='flex-1 flex flex-col justify-center items-start border-l-2 md:border-l-0 border-solid border-gray-233031'>
              <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
                <div
                  className='pl-4 md:pl-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 text-36 pt-20'
                  style={{ width: 'fit-content', blockSize: 'fit-content' }}
                >
                  Design
                </div>
              </ScrollAnimation>
              <div className='relative mt-20'>
                <div className='absolute -left-3' style={{ marginTop: -118 }}>
                  <div className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-gray-233031' />
                </div>
                <div className='hidden md:block'>
                  <Image src={DesignLine} alt={'DesignLine'} priority />
                </div>
                <div className='md:hidden'>
                  <Image src={DesignLineM} alt={'DesignLine'} priority />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row'>
            <div className='flex-1 flex flex-col justify-center items-start md:items-end border-l-2 md:border-l-0 border-r-0 md:border-r-2 border-solid border-gray-233031'>
              <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
                <div className='pl-4 md:pl-0 pr-0 md:pr-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 bg-cover text-36 pt-20'>
                  Development and Testing
                </div>
              </ScrollAnimation>
              <div className='relative mt-20 md:mb-20'>
                <div className='absolute -left-3 md:left-auto md:-right-3 -mt-44 md:-mt-40 lg:-mt-32'>
                  <div className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-gray-233031' />
                </div>
                <div className='hidden md:block'>
                  <Image
                    src={DevelopmentLine}
                    alt={'DevelopmentLine'}
                    priority
                  />
                </div>
                <div className='md:hidden'>
                  <Image
                    src={DevelopmentLineM}
                    alt={'DevelopmentLine'}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center border-l-2 md:border-l-0 border-solid border-gray-233031 pb-20 md:pb-0'>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='relative mt-20 px-3'>
                  <div className='absolute z-20 md:-left-24 md:-bottom-20'>
                    <Image src={Circle} alt={'circle'} />
                  </div>
                  <div>
                    <Image src={Development} alt={'Development'} />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='mt-12 max-w-26.5 leading-8 text-gray-350 px-3'>
                  Sphinx engineer team write code and convert the design
                  documentation into the existing software within the software
                  development process.
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='flex-1 flex flex-col justify-center items-center pt-10'>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='relative px-3'>
                  <div className='absolute z-20 md:-right-24 md:-bottom-20'>
                    <Image src={Circle} alt={'circle'} />
                  </div>
                  <div>
                    <Image src={Deployment} alt={'Deployment'} />
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn={'animate__fadeIn'}>
                <div className='mt-12 max-w-26.5 leading-8 text-gray-350 px-3'>
                  The final stage to making sure all code is merged in one place
                  and continuously ready to be shipped. Seamlessly taking the
                  product from continuous delivery and deploying to servers
                  through.
                </div>
              </ScrollAnimation>
            </div>
            <div className='flex-1 flex flex-col justify-start items-start'>
              <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
                <div
                  className='pl-4 md:pl-10 bg-clip-text text-transparent bg-gradient-to-r from-yellow-FFC838 to-orange-E05529 bg-yellow-FFC838 text-36 pt-8 -mt-12'
                  style={{ width: 'fit-content', blockSize: 'fit-content' }}
                >
                  Deployment
                </div>
              </ScrollAnimation>
              <div className='relative -mt-9 md:-mt-10'>
                <div className='absolute -left-3 z-20'>
                  <div className='w-25 h-25 rounded-full bg-gray-850 border-2 border-solid border-gray-233031' />
                </div>
                <div className='hidden md:block'>
                  <Image src={DeploymentLine} alt={'DeploymentLine'} priority />
                </div>
                <div className='md:hidden'>
                  <Image
                    src={DeploymentLineM}
                    alt={'DeploymentLine'}
                    priority
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
