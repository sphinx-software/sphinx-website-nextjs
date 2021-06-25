import Image from 'next/image'
import { FC } from 'react'
import { Information } from '../config'
import { useConfig } from './ConfigProvider'

const AboutBanner = () => {
  const { aboutInformations } = useConfig()
  return (
    <section
      className='bg-cover bg-bottom'
      style={{
        backgroundImage: "url('/bgWConnerUp.svg')"
      }}
    >
      <div className='mx-auto max-w-6xl pt-12 md:pt-20 pb-10 px-2 xl:pb-20 md:px-0'>
        <div className='w-full lg:w-2/3 mx-auto'>
          <p className='text-center text-16 leading-32 text-gray-250'>
            Founded in 2015 and headquartered in Hanoi, Sphinx is not only a
            team of guys who young, enthusiastic, and passionate about computer
            science but also home to many young architectures since they were in
            1st year of the university until they become experts.
          </p>
        </div>
        <div className='py-16 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {aboutInformations.map((information: Information, index: number) => (
            <InformationBox key={index} information={information} />
          ))}
        </div>
      </div>
    </section>
  )
}

declare type InformationBoxProps = {
  information: Information
}
const InformationBox: FC<InformationBoxProps> = ({
  information: { subTitle, title, icon }
}) => {
  return (
    <div className='flex flex-col items-center space-y-2 py-7'>
      <Image src={icon} alt={title} />
      <div>
        <p className='text-24 leading-48 text-white'>{title}</p>
      </div>
      <div>
        <p className='text-16 leading-32 text-gray-350'>{subTitle}</p>
      </div>
    </div>
  )
}

export default AboutBanner