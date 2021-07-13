import React, { FC } from 'react'
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
import ScrollAnimation from 'react-animate-on-scroll'

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

interface StaticRequire {
  default: StaticImageData
}
declare type StaticImport = StaticRequire | StaticImageData

declare type CompanyStrengthProps = {
  icon: StaticImport
  text: string
  index: number
}

const CompanyStrength: FC<CompanyStrengthProps> = ({ icon, text, index }) => {
  return (
    <ScrollAnimation
      animateIn={'animate__fadeInUp'}
      delay={((index + 1) * 1000) / 4}
      animateOnce
    >
      <div
        style={{
          backgroundImage: "url('strengthBg.png')",
          width: 225,
          height: 200
        }}
        className='flex justify-center flex-col content-center text-center text-white hover:-translate-x-1 hover:scale-105 transition duration-700 ease-in-out transform'
      >
        <div className='mb-2'>
          <Image src={icon} alt='Sphinx Software' />
        </div>
        <span className='p-1 text-16 text-gray-250'>{text}</span>
      </div>
    </ScrollAnimation>
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
    return (
      <div className='mt-8 h-2 w-2 rounded-full bg-gray-450 sphinx-slick' />
    )
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
      <div className='block md:hidden bg-gray-850'>
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
            index={index}
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
      <div
        style={{
          backgroundImage: "url('strengthBg.png')",
          width: 225,
          height: 200
        }}
        className='flex justify-center flex-col content-center text-center text-white cursor-pointer hover:-translate-x-1 hover:scale-105 transition duration-700 ease-in-out transform'
      >
        <div className='mb-2'>
          <Image src={strength1.icon} alt='Sphinx Software' />
        </div>
        <span className='p-1 text-16 text-gray-250'>{strength1.text}</span>
      </div>
      <div
        style={{
          backgroundImage: "url('strengthBg.png')",
          width: 225,
          height: 200
        }}
        className='flex justify-center flex-col content-center text-center text-white cursor-pointer hover:-translate-x-1 hover:scale-105 transition duration-700 ease-in-out transform'
      >
        <div className='mb-2'>
          <Image src={strength2.icon} alt='Sphinx Software' />
        </div>
        <span className='p-1 text-16 text-gray-250'>{strength2.text}</span>
      </div>
    </div>
  )
}

export default CompanyStrengths
