import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import avatarRikky from './../public/avatarRikky.png'
import avatarPhong from './../public/avatarPhong.png'
import avatarTota from './../public/avatarTota.png'
import { SECTION, useAboutSection } from './AboutProvider'
import ScrollAnimation from 'react-animate-on-scroll'

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
    },
    {
      name: 'Mr. Phong',
      position: 'CTO',
      avatar: avatarPhong
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
      <div className='mt-6 w-4 mr-1 h-1 rounded bg-gray-250 sphinx-slick' />
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
  const ref = useRef<any>(null)
  const [{ sectionActive }] = useAboutSection()
  useEffect(() => {
    if (sectionActive === SECTION.KEYHOLDER) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sectionActive])

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl py-12 md:py-20 px-6 md:px-0'>
        <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
          <p className='text-36 leading-48 text-black-50 text-center' ref={ref}>
            Keyholder
          </p>
        </ScrollAnimation>
        <div className='mt-12 mb-12 md:mb-0'>
          <div className='block md:hidden'>
            <Slider {...settings}>
              {holders.map((h, index) => (
                <div key={index}>
                  {h.map((value, index) => (
                    <Holder key={index} holder={value} />
                  ))}
                </div>
              ))}
            </Slider>
          </div>
          <div className='hidden md:grid md:grid-cols-3 gap-y-6'>
            {holders.flat().map((h, index) => (
              <ScrollAnimation
                key={index}
                animateIn='animate__fadeInUp'
                delay={((index + 1) * 1000) / 6}
                animateOnce
              >
                <Holder holder={h} />
              </ScrollAnimation>
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
      <Image width={144} height={144} src={avatar} alt={name} />
      <p className='text-16 leading-32 mt-4'>{name}</p>
      <p className='text-16 leading-32 text-gray-350'>{position}</p>
    </div>
  )
}

export default BoardOfDirector
