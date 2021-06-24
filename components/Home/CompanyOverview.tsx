import { FunctionComponent } from 'react'
import Image from 'next/image'
import imageCompanyOverview from '../../public/imageCompanyOverview.svg'
import { ArrowForward } from '../../ui/icons'
import styles from './Home.module.css'
import classes from 'classnames'
import classNames from 'classnames'

const CompanyOverview: FunctionComponent = () => {
  return (
    <div className='mt-20'>
      <div className='mx-auto max-w-6xl flex items-center flex-col md:flex-row-reverse md:justify-around'>
        <div
          className={classes([
            styles.overViewContent,
            'h-320 w-320 lg:h-420 lg:w-420'
          ])}
        >
          <div className='pl-4 lg:pl-10 lg:pr-4'>
            <h2 className='py-4 text-24 text-black-50'>Company Overview</h2>
            <p className='text-16 text-black-50 leading-32'>
              Founded in 2015 and headquartered in Hanoi, Sphinx is not only a
              team of guys who young, enthusiastic, and passionate about
              computer science but also home to many young architectures since
              they were in 1st year of the university until they become experts.
            </p>
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
          </div>
        </div>
        <div
          className={classes([
            styles.companyOverviewImage,
            'h-320 w-320 lg:h-450 lg:w-450'
          ])}
        >
          <Image src={imageCompanyOverview} alt={'Sphinx Software'} />
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview
