import Image from 'next/image'
import imageBanner from '../public/imageBanner.svg'
import styles from './../styles/Banner.module.css'

const BannerSection = () => {
  return (
    <section
      className='bg-cover bg-bottom'
      style={{
        backgroundImage: "url('/bgWConnerUp.svg')"
      }}
    >
      <div className='mx-auto max-w-6xl mt-4 md:mt-10 pb-20 px-2 xl:pb-32 md:px-0'>
        <div className='flex flex-col items-center md:flex-row md:px-6'>
          <div>
            <h1 className='text-40 leading-64 md:text-64 md:leading-80 text-white'>
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
          <div className='mt-12'>
            <Image src={imageBanner} alt='Sphinx Software' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
