import Image from 'next/image'
import styles from './../styles/Banner.module.css'
import imageBannerCode from './../public/imageBannerCode.svg'
import imageBannerCSS from './../public/imageBannerCSS.svg'
import imageBannerPHP from './../public/imageBannerPHP.svg'
import imageBannerLaptop from './../public/imageBannerLaptop.svg'
import imageBannerSoftware from './../public/imageBannerSoftware.svg'
import imageBannerXML from './../public/imageBannerXML.svg'
import imageBannerSQL from './../public/imageBannerSQL.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import { useRouter } from 'next/router'

const HomeBanner = () => {
  const router = useRouter()
  return (
    <section
      className='bg-cover bg-bottom'
      style={{
        backgroundImage: "url('/bgWConnerUp.svg')"
      }}
    >
      <div className='mx-auto max-w-7xl mt-4 py-8 pb-20 md:pb-28 md:pt-14 px-2 xl:pt-32 xl:pb-72 lg:px-0'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='md:w-1/2'>
            <ScrollAnimation animateIn='animate__fadeInUp'>
              <h1 className='text-40 leading-64 md:text-64 md:leading-80 text-white'>
                CREATING THE INNOVATIVE FUTURE
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInUp' delay={350}>
              <p className='text-16 leading-32 text-gray-350'>
                Providing the most professional technology services for clients
                worldwide
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInUp' delay={450}>
              <button
                className={styles.buttonContactUs}
                onClick={() => router.push('/contact')}
              >
                <p>Contact Us</p>
              </button>
            </ScrollAnimation>
          </div>
          <div className='w-full mt-80 md:mt-24 md:w-1/2'>
            <div className='w-full relative -top-60'>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeInDown'>
                  <Image src={imageBannerPHP} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__lightSpeedInRight'>
                  <Image src={imageBannerCSS} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>

              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeIn' duration={3}>
                  <Image src={imageBannerLaptop} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeIn' duration={6}>
                  <Image src={imageBannerCode} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>
              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeIn' duration={3}>
                  <Image src={imageBannerSoftware} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>

              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeInLeft'>
                  <Image src={imageBannerXML} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>

              <div className='absolute'>
                <ScrollAnimation animateIn='animate__fadeInUp'>
                  <Image src={imageBannerSQL} alt='Sphinx Software' />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner
