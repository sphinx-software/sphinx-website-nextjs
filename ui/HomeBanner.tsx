import Image from 'next/image'
import imageBanner from './../public/imageBanner.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import bgWConnerUp from '../public/bgWConnerUp.svg'
import { useRouter } from 'next/router'

const HomeBanner = () => {
  const router = useRouter()
  return (
    <section className='relative'>
      <div
        className='mx-auto max-w-7xl px-6 xl:px-0'
        style={{ minHeight: 680 }}
      >
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='flex-1 mt-14 xl:mt-32'>
            <ScrollAnimation animateIn='animate__fadeInUp' animateOnce={true}>
              <h1 className='text-40 leading-64 md:text-64 md:leading-80 text-white'>
                CREATING THE INNOVATIVE FUTURE
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn='animate__fadeInUp'
              delay={450}
              animateOnce={true}
            >
              <p className='text-16 leading-32 text-gray-350'>
                Providing the most professional technology services for clients
                worldwide
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn={'animate__fadeIn'}
              delay={1000}
              animateOnce={true}
            >
              <button
                className='btn-grad'
                onClick={() => router.push('/contact')}
              >
                <p>Contact Us</p>
              </button>
            </ScrollAnimation>
          </div>
          <div className='flex-1 mt-14 xl:mt-8 mb-24 md:mb-0'>
            <ScrollAnimation animateIn={'animate__fadeIn'} duration={2}>
              <Image src={imageBanner} alt='Sphinx Software' />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className='absolute -bottom-2'>
        <Image src={bgWConnerUp} alt='bgWConnerUp' priority />
      </div>
    </section>
  )
}

export default HomeBanner
