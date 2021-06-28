import { FC } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import avatarRikky from './../public/avatarRikky.png'
import avatarDoanh from './../public/avatarDoanh.png'
import avatarOlivia from './../public/avatarOlivia.png'
import avatarPhong from './../public/avatarPhong.png'
import avatarTony from './../public/avatarTony.png'
import avatarTota from './../public/avatarTota.png'

type HolderType = {
  name: string
  avatar: any
  position: string
}

const holders: HolderType[][] = [
  [
    {
      name: 'Mr. Rikky',
      position: 'CEO',
      avatar: avatarRikky
    },
    {
      name: 'Mr. Tota',
      position: 'Project Manager',
      avatar: avatarTota
    }
  ],
  [
    {
      name: 'Mr. Phong',
      position: 'CTO',
      avatar: avatarPhong
    },
    {
      name: 'Ms. Tonny',
      position: 'System Architect',
      avatar: avatarTony
    }
  ],
  [
    {
      name: 'Ms. Olivia',
      position: 'Sale Executive',
      avatar: avatarOlivia
    },
    {
      name: 'Mr. Doanh',
      position: 'Designer',
      avatar: avatarDoanh
    }
  ]
]
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
      <div className='mt-8 w-4 mx-1.5 h-1 rounded bg-gray-250 sphinx-slick' />
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

const BoardOfDirector: FC = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl pt-12 md:pt-24 pb-10 px-2 xl:pb-24 md:px-0'>
        <p className='text-36 leading-48 text-black-50 text-center'>
          Keyholder
        </p>
        <div className='mt-12 mb-12 md:mb-0'>
          <div className='block md:hidden'>
            <Slider {...settings}>
              {holders.map((h, index) => (
                <div key={index}>
                  <Holder holder={h[0]} />
                  <Holder holder={h[1]} />
                </div>
              ))}
            </Slider>
          </div>
          <div className='hidden md:grid md:grid-cols-3 gap-y-6'>
            {holders.flat().map((h, i) => (
              <Holder holder={h} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Holder: FC<{ holder: HolderType }> = ({
  holder: { avatar, position, name }
}) => {
  return (
    <div className='flex flex-col items-center py-6'>
      <Image width={144} height={144} src={avatar} />
      <p className='text-16 leading-32 mt-4'>{name}</p>
      <p className='text-16 leading-32 text-gray-350'>{position}</p>
    </div>
  )
}

export default BoardOfDirector
