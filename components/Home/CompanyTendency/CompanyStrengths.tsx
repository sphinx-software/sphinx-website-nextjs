import { FC } from 'react'
import Image from 'next/image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import iconsCost from '../../../public/iconCost.svg'
import iconTime from '../../../public/_iconTime.svg'
import iconAgility from '../../../public/iconAgility.svg'
import iconStable from '../../../public/iconStable.svg'
import iconFlexibility from '../../../public/iconFlexibility.svg'
import iconQuality from '../../../public/iconQuality.svg'

declare type Strength = {
  icon: any
  text: string
}
const configs = [
  [
    { icon: iconsCost, text: 'Cost' },
    { icon: iconTime, text: 'Time' }
  ],
  [
    { icon: iconAgility, text: 'Agility' },
    {
      icon: iconStable,
      text: 'Stable'
    }
  ],
  [
    {
      icon: iconFlexibility,
      text: 'Flex'
    },
    {
      icon: iconQuality,
      text: 'Quality'
    }
  ]
]

declare type CompanyStrengthProps = {
  icon: any
  text: string
}

const CompanyStrength: FC<CompanyStrengthProps> = ({ icon, text }) => {
  return (
    <div
      style={{
        backgroundImage: "url('strengthBg.png')",
        width: 225,
        height: 200
      }}
      className='flex justify-center flex-col content-center text-center text-white'
    >
      <div className='mb-2'>
        <Image src={icon} />
      </div>
      <span className='p-1 text-sm font-normal'>{text}</span>
    </div>
  )
}

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: <></>,
  prevArrow: <></>,
  customPaging: function f() {
    return <div className='mt-8 w-6 mx-1 h-1 bg-orange-450 rounded' />
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

const CompanyStrengths: FC = () => {
  return (
    <>
      <div className='block md:hidden'>
        <Slider {...settings}>
          {configs.map((strengths, index) => (
            <DoubleStrength
              key={index}
              strength1={strengths[0]}
              strength2={strengths[1]}
            />
          ))}
        </Slider>
      </div>
      <div className='hidden md:grid grid-cols-3 gap-y-16 mt-14 grid-flow-row place-items-center'>
        {configs.flat().map((strength, index) => (
          <CompanyStrength
            icon={strength.icon}
            text={strength.text}
            key={index}
          />
        ))}
      </div>
    </>
  )
}

declare type DoubleStrengthProps = {
  strength1: Strength
  strength2: Strength
}
const DoubleStrength: FC<DoubleStrengthProps> = ({ strength1, strength2 }) => {
  return (
    <div className='flex flex-col items-center space-y-8'>
      <CompanyStrength icon={strength1.icon} text={strength1.text} />
      <CompanyStrength icon={strength2.icon} text={strength2.text} />
    </div>
  )
}

export default CompanyStrengths
