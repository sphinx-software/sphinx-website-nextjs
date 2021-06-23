import { FC } from 'react'
import Image from 'next/image'
import iconWebApplication from '../../../public/icon_WebApplication.svg'
import iconCloud from '../../../public/iconCloud.svg'
import iconPlatform from '../../../public/iconPlatform.svg'

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
    <div className='bg-gray-250 py-20 px-0 lg:px-44 xl:px-56'>
      <div className='px-3 text-center'>
        <h2 className='text-7xl text-gray-450 py-2'>Services</h2>
        <div className='mt-2'>
          <p className='text-gray-450 leading-7 text-sm'>
            Sphinx provides services to companies based on modern technology
            platforms
          </p>
        </div>
      </div>
      <div className='px-3 my-12 grid grid-rows-1 gap-y-11 md:grid-cols-3 md:gap-8 md:place-items-center'>
        {services.map((s, index) => (
          <Service key={index} service={s} />
        ))}
      </div>
    </div>
  )
}

export default CompanyService

declare type ServiceProps = {
  service: ServiceType
}

const Service: FC<ServiceProps> = ({ service }) => {
  return (
    <div className='flex items-center space-x-6 md:space-x-0 space-y-0 text-xl py-4 pl-10 md:px-8 bg-white rounded-3xl md:flex-col'>
      <div className='block md:hidden'>
        <Image width={64} height={64} src={service.icon} />
      </div>
      <div className='hidden md:block'>
        <Image width={100} height={100} src={service.icon} />
      </div>
      <div className='mt-0 md:mt-8 md:text-sm'>
        <span>{service.text}</span>
      </div>
    </div>
  )
}
