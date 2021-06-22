import { FC } from 'react'
import Image from 'next/image'
import imageCompanyOverview from '../../public/imageCompanyOverview.svg'
import { ArrowForward } from '../../ui/icons'
import styles from './Home.module.css'
import classes from 'classnames'

const CompanyOverview: FC = () => {
  return (
    <div className='mt-20'>
      <div className='flex items-center flex-col md:flex-row-reverse md:justify-around'>
        <div
          className={classes([
            styles.overViewContent,
            'h-sm w-sm lg:h-md lg:w-md'
          ])}
        >
          <div className='pl-4 lg:px-4'>
            <h2 className='py-4 text-2xl'>Company Overview</h2>
            <p className='text-sm leading-7'>
              Founded in 2015 and headquartered in Hanoi, Sphinx is not only a
              team of guys who young, enthusiastic, and passionate about
              computer science but also home to many young architectures since
              they were in 1st year of the university until they become experts.
            </p>
            <button className={styles.companyOverviewButtonSeeMore}>
              <span className={styles.companyOverviewButtonSeeMoreText}>
                See more
              </span>
              <ArrowForward />
            </button>
          </div>
        </div>
        <div
          className={classes([
            styles.companyOverviewImage,
            'h-sm w-sm lg:h-md lg:w-md'
          ])}
        >
          <Image src={imageCompanyOverview} />
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview
