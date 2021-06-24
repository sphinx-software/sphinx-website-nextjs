import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import React from 'react'

export default function WorkingProcess(): JSX.Element {
  return (
    <div className={styles.workingMain}>
      <div className={styles.workingIntroduction}>
        <text className={styles.workingTitle}>Working process</text>
        <br />
        <text className={styles.workingDescription}>
          Sphinx workflow based on agile scrum methodology has agility and
          adaptability, creativity and innovation with lower costs, quality
          improvement, and maximization of company synergy.
        </text>
      </div>
      <div className={styles.workingContent}>
        <div>
          <div className={'flex justify-center md:justify-start'}>
            <p className={styles.workingContentTitle}>
              Requirement&apos;s analysis
            </p>
          </div>
          <div className='flex w-full h-auto pb-28 lg:pb-250'>
            <div className={styles.workingContentLine} />
            <div
              className={
                'flex flex-col justify-start items-end w-full md:w-1/2'
              }
            >
              <div className={'flex justify-start items-end w-full flex-col'}>
                <div className={'absolute z-10 rounded-full mr-4'}>
                  <Image
                    src={'/circle.svg'}
                    height={536}
                    width={536}
                    alt={'circle'}
                  />
                </div>
                <div className='absolute z-0 mt-0 pr-0'>
                  <Image
                    src={'/analysis.svg'}
                    width={424}
                    height={424}
                    alt={'deployment'}
                  />
                </div>
                <p className={styles.workingContentImageDescription}>
                  After receiving inquiries from customer, the Sphinx team will
                  indicate the project scope and create a plan to gain
                  engagement with customers by using tools
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'flex justify-center md:justify-start'}>
            <p className={styles.workingContentTitle}>Design</p>
          </div>
          <div className='flex w-full h-auto pb-28 lg:pb-250'>
            <div className={styles.workingContentLine} />
            <div
              className={
                'flex flex-col justify-star items-end  w-full md:w-1/2'
              }
            >
              <div
                className={
                  'flex justify-start items-center lg:items-end w-full flex-col'
                }
              >
                <div className='absolute z-10 rounded-full mr-4'>
                  <Image
                    src={'/circle.svg'}
                    height={536}
                    width={536}
                    alt={'circle'}
                  />
                </div>
                <div className='absolute z-0 mt-0 pr-0'>
                  <Image
                    src={'/design.svg'}
                    width={424}
                    height={424}
                    alt={'deployment'}
                  />
                </div>
                <p className={styles.workingContentImageDescription}>
                  The process divides into two-stage: Internal Design and
                  External Design. These stages help determine that the software
                  meets thespecifications&apos; goals and improves the product
                  in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'flex justify-center md:justify-start'}>
            <p className={styles.workingContentTitle}>Development</p>
          </div>
          <div className='flex w-full h-auto pb-28 lg:pb-250'>
            <div className={styles.workingContentLine} />
            <div
              className={'flex flex-col justify-star items-end w-full md:w-1/2'}
            >
              <div className={'flex justify-start items-end w-full flex-col'}>
                <div className='absolute z-10 rounded-full mr-4'>
                  <Image
                    src={'/circle.svg'}
                    height={536}
                    width={536}
                    alt={'circle'}
                  />
                </div>
                <div className='absolute z-0 mt-0 pr-0'>
                  <Image
                    src={'/development.svg'}
                    width={424}
                    height={424}
                    alt={'deployment'}
                  />
                </div>
                <p className={styles.workingContentImageDescription}>
                  Sphinx engineer team write code and convert the design
                  documentation into the existing software within the software
                  development process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={'flex justify-center md:justify-start'}>
            <p className={styles.workingContentTitle}>Deployment</p>
          </div>
          <div className='flex w-full h-auto pb-28 lg:pb-250'>
            <div className={styles.workingContentLine} />
            <div
              className={'flex flex-col justify-star items-end w-full md:w-1/2'}
            >
              <div className={'flex justify-start items-end w-full flex-col'}>
                <div className='absolute z-10 rounded-full mr-4'>
                  <Image
                    src={'/circle.svg'}
                    height={536}
                    width={536}
                    alt={'circle'}
                  />
                </div>
                <div className='absolute z-0 mt-0 pr-0'>
                  <Image
                    src={'/deployment.svg'}
                    width={424}
                    height={424}
                    alt={'deployment'}
                  />
                </div>
                <p className={styles.workingContentImageDescription}>
                  The final stage to making sure all code is merged in one place
                  and continuously ready to be shipped. Seamlessly taking the
                  product from continuous delivery and deploying to servers
                  through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
