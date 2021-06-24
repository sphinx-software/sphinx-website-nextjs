import Image from 'next/image'
import imageBanner from '../public/imageBanner.svg'
import styles from './../styles/Banner.module.css'

const BannerSection = () => {
  return (
    <div
      style={{ backgroundImage: "url('/bannerBg.svg')" }}
      className='bg-cover bg-bottom -mt-40'
    >
      <div className='mx-auto max-w-6xl pt-48 md:pt-40 pb-24 px-2 xl:pb-32'>
        <div className='flex flex-col items-center md:flex-row md:px-6'>
          <div>
            <h1 className='text-40 leading-64 text-white'>
              CREATING THE INNOVATIVE FUTURE
            </h1>
            <p className='text-16 leading-32 text-gray-350'>
              Providing the most professional technology services for clients
              worldwide
            </p>
            <button className={styles.buttonContactUs}>
              <p>Contact Us</p>
            </button>
          </div>
          <div className='mt-20'>
            <Image src={imageBanner} alt='Sphinx Software' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSection