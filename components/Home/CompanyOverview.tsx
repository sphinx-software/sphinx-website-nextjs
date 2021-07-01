import { FunctionComponent } from 'react'
import Image from 'next/image'
import { ArrowForward } from '../../ui/icons'
import styles from './Home.module.css'
import classes from 'classnames'
import classNames from 'classnames'
import ScrollAnimation from 'react-animate-on-scroll'
import imageCompanyOverviewBG from './../../public/imageCompanyOverviewbg.svg'
import imageCompanyOverviewRocket from './../../public/imageCompanyOverviewRocket.svg'
import imageCompanyOverviewScreen from './../../public/imageCompanyOverviewScreen.svg'

const CompanyOverview: FunctionComponent = () => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-2 md:px-0 pt-12 py-12 md:pt-28 md:pb-52'>
        <div className='flex items-center flex-col md:flex-row-reverse md:justify-between'>
          <div
            className={classes([
              styles.overViewContent,
              'h-320 w-320 lg:h-480 lg:w-480'
            ])}
          >
            <div className='pl-4 lg:pl-10 lg:pr-4 md:mt-16'>
              <ScrollAnimation animateIn='animate__fadeInUp'>
                <h2 className='py-4 text-24 leading-48 text-black-50'>
                  Company Overview
                </h2>
              </ScrollAnimation>
              <ScrollAnimation animateIn='animate__fadeInUp' delay={1000}>
                <p className='text-16 text-black-50 leading-32'>
                  Founded in 2015 and headquartered in Hanoi, Sphinx is not only
                  a team of guys who young, enthusiastic, and passionate about
                  computer science but also home to many young architectures
                  since they were in 1st year of the university until they
                  become experts.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animateIn='animate__fadeInUp' delay={2000}>
                <button className={styles.companyOverviewButtonSeeMore}>
                  <span
                    className={classNames([
                      styles.companyOverviewButtonSeeMoreText,
                      'text-16'
                    ])}
                  >
                    See more
                  </span>
                  <ArrowForward />
                </button>
              </ScrollAnimation>
            </div>
          </div>
          <div className='mt-28 md:-mt-20 w-full h-80 md:w-1/2'>
            <div className='relative w-full'>
              <div className='absolute'>
                <Image src={imageCompanyOverviewBG} alt={'Sphinx Software'} />
              </div>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeInUp' delay={1000}>
                  <Image
                    src={imageCompanyOverviewRocket}
                    alt={'Sphinx Software'}
                  />
                </ScrollAnimation>
              </div>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeInLeft'>
                  <Image
                    src={imageCompanyOverviewScreen}
                    alt={'Sphinx Software'}
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
