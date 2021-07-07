import { FunctionComponent } from 'react'
import Image from 'next/image'
import { ArrowForward } from '../../ui/icons'
import styles from './Home.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import ImageCompanyOverview from '../../public/imageCompanyOverview.svg'
import { useRouter } from 'next/router'

const CompanyOverview: FunctionComponent = () => {
  const route = useRouter()
  return (
    <section className='bg-white' id={'overview'}>
      <div className='mx-auto max-w-7xl px-6 xl:px-0'>
        <div className='flex items-center flex-col md:flex-row-reverse md:justify-between items-center'>
          <div className='flex-1 flex justify-end'>
            <div className={styles.overViewContent}>
              <div className='pl-4 lg:pl-10 lg:pr-4 mt-16'>
                <ScrollAnimation animateIn='animate__fadeIn' animateOnce>
                  <h2 className='text-24 leading-48 text-black-50'>
                    Company Overview
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn='animate__fadeIn'
                  delay={350}
                  offset={100}
                  animateOnce
                >
                  <p className='text-16 text-black-50 leading-32 mt-3'>
                    Founded in 2015 and headquartered in Hanoi, Sphinx is not
                    only a team of guys who young, enthusiastic, and passionate
                    about computer science but also home to many young
                    architectures since they were in 1st year of the university
                    until they become experts.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn='animate__fadeIn'
                  delay={700}
                  animateOnce
                >
                  <button
                    className={styles.companyOverviewButtonSeeMore}
                    onClick={() => route.push('/about')}
                  >
                    <span className={styles.companyOverviewButtonSeeMoreText}>
                      See more
                    </span>
                    <ArrowForward />
                  </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className='flex-1 my-40 flex justify-start'>
            <div className='flex items-center'>
              <ScrollAnimation animateIn={'animate__fadeIn'} duration={2}>
                <Image
                  src={ImageCompanyOverview}
                  alt={'ImageCompanyOverview'}
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
