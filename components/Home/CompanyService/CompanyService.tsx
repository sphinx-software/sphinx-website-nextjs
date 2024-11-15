import { FC } from 'react'
import Image from 'next/image'
import iconWebApplication from '../../../public/icon_WebApplication.svg'
import iconCloud from '../../../public/iconCloud.svg'
import iconPlatform from '../../../public/iconPlatform.svg'
import ScrollAnimation from 'react-animate-on-scroll'
import { homeMenu } from '../../../config'
import { Element } from 'react-scroll'

declare type ServiceType = {
  icon: any
  text: string
}
const services: ServiceType[] = [
  {
    icon: iconWebApplication,
    text: 'Web application'
  },
  {
    icon: iconCloud,
    text: 'Cloud'
  },
  {
    icon: iconPlatform,
    text: 'Cross-platform'
  }
]

const CompanyService: FC = () => {
  return (
    <Element name={homeMenu.SERVICES}>
      <section className='bg-gray-250 py-24 md:py-36'>
        <div className='max-w-7xl mx-auto'>
          <div className='px-6 md:px-0 text-center'>
            <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
              <h2 className='px-1 md:px-0 text-gray-450 font-normal text-36 text-center leading-56'>
                Services
              </h2>
            </ScrollAnimation>
            <div className='mt-2'>
              <ScrollAnimation
                animateIn='animate__fadeInUp'
                delay={450}
                animateOnce
              >
                <p className='text-gray-450 leading-32 text-16'>
                  Sphinx provides services to companies based on modern
                  technology platforms
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className='px-6 md:px-0 mt-14 md:mt-16 mb-4 md:mb-0 flex flex-col md:flex-row md:justify-around'>
            {services.map((s, index) => (
              <ScrollAnimation
                key={index}
                animateIn={'animate__fadeInUp'}
                delay={((index + 1) * 1000) / 4}
                animateOnce
              >
                <Service service={s} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}

export default CompanyService

declare type ServiceProps = {
  service: ServiceType
}

const Service: FC<ServiceProps> = ({ service }) => {
  return (
    <div className='mt-6 md:mt-0 flex items-center shadow-lg space-x-6 md:space-x-0 text-xl bg-white rounded-3xl md:flex-col hover:-translate-x-1 hover:scale-105 md:transition md:duration-700 md:ease-in-out md:transform'>
      <div className='pt-4 pl-8 pb-1 md:pt-8 md:px-12 xl:pt-12 xl:px-16'>
        <div className='block md:hidden'>
          <Image
            width={64}
            height={64}
            src={service.icon}
            alt='Sphinx Software'
          />
        </div>
        <div className='hidden md:block'>
          <Image
            width={120}
            height={120}
            src={service.icon}
            alt='Sphinx Software'
          />
        </div>
      </div>
      <div className='mt-0 pb-0 md:mt-4 text-24 leading-32 md:pb-8 md:px-4 xl:px-8 xl:pb-12 text-black-300'>
        <span>{service.text}</span>
      </div>
    </div>
  )
}
