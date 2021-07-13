import React, { FC, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import dotActive from './../public/dotActive.svg'
import dot from './../public/dot.svg'
import timeLine1 from './../public/timeLine1.svg'
import timeLine2 from './../public/timeLine2.svg'
import timeLine3 from './../public/timeLine3.svg'
import timeLine4 from './../public/timeLine4.svg'
import timeLine5 from './../public/timeLine5.svg'
import classNames from 'classnames'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { SECTION, useAboutSection } from './AboutProvider'
import ScrollAnimation from 'react-animate-on-scroll'
import useWindowDimensions from '../services/useWindowDimensions'
import { screen } from '../config'

declare type TimeLineType = {
  content: string
  image: any
}

const timeLines: TimeLineType[] = [
  {
    content:
      'Since 2016, Sphinx has established the loT and Robotics Development Laboratory.',
    image: timeLine1
  },
  {
    content:
      'Research and Development platforms are Tessel I2, Rasberry Pi, Intel TM Edison, Esp32, NVIDIA Jetson module.',
    image: timeLine2
  },
  {
    content: 'The Technology used: ROS, TensorFlow.',
    image: timeLine3
  },
  {
    content:
      'Achievements: Provide solutions for X smart home, Robot, Al, Computer vision.',
    image: timeLine4
  },
  {
    content:
      'Sphinx plans to commercialize the applications once they are fully implementedand pass all quality testing.',
    image: timeLine5
  }
]

const ResearchDevelopment: FC = () => {
  const ref = useRef<any>(null)
  const [{ sectionActive }] = useAboutSection()
  useEffect(() => {
    if (sectionActive === SECTION.RESEARCH_DEVELOPMENT) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [sectionActive])

  return (
    <section
      className='bg-cover bg-white bg-top'
      style={{ backgroundImage: "url('/researchAndDevelopmentBg.svg')" }}
    >
      <div className='max-w-7xl mx-auto py-12 md:py-20 px-3 md:px-0'>
        <div className='md:flex md:flex-col md:items-center'>
          <div className='text-center px-2'>
            <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
              <p className='text-36 leading-48 text-white'>R&D</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn='animate__fadeInUp'
              delay={350}
              animateOnce
            >
              <p className='text-16 leading-32 text-gray-350 mt-6' ref={ref}>
                Research & Developments
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <div className='mt-14 md:mt-24'>
          <TimeLine />
        </div>
      </div>
    </section>
  )
}

const TimeLine: FC = () => {
  const [indexTimeLineActive, setIndexTimeLineActive] = useState(0)
  const { width } = useWindowDimensions()

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexTimeLineActive === timeLines.length - 1) {
        setIndexTimeLineActive(0)
      } else {
        setIndexTimeLineActive(indexTimeLineActive + 1)
      }
    }, 5000)
    return () => clearInterval(interval)
  })

  const ref = useRef<any>(null)
  return (
    <>
      {width < screen.md ? (
        <div className='overflow-x-auto flex flex-nowrap scrollbar scrollbar-thin scrollbar-thumb-black-300 scrollbar-thumb-rounded-full'>
          {timeLines.map((t, i) => (
            <div key={i} className='min-w-full'>
              <div className='pr-4 pl-2'>
                <Image src={t.image} alt='Sphinx Software' />
              </div>
              <div className='mt-14'>
                <TimeLineItem timeLine={t} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex space-x-6'>
          <div className='flex-1'>
            <div className='h-536 w-424 overflow-y-auto md:flex-col px-2 scrollbar scrollbar-thin scrollbar-thumb-black-300 scrollbar-thumb-rounded-full py-1'>
              {timeLines.map((t, i) => (
                <div key={i}>
                  <TimeLineItem
                    lastItem={timeLines.length - 1 === i}
                    timeLine={t}
                    active={i === indexTimeLineActive}
                    onClickTimeLine={() => setIndexTimeLineActive(i)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1'>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                nodeRef={ref}
                timeout={300}
                in
                key={indexTimeLineActive}
                classNames='fade'
              >
                <div ref={ref}>
                  <Image
                    src={timeLines[indexTimeLineActive].image}
                    alt='Sphinx Software'
                  />
                </div>
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      )}
    </>
  )
}

const TimeLineItem: FC<{
  lastItem?: boolean
  timeLine: TimeLineType
  active?: boolean
  onClickTimeLine?: () => void
}> = ({
  timeLine: { content },
  active = true,
  onClickTimeLine = () => undefined,
  lastItem
}) => {
  const { width } = useWindowDimensions()
  return (
    <>
      {width < screen.md ? (
        <div>
          <div className='flex items-center'>
            <Image src={dotActive} alt='Sphinx Software' />
            <Line />
          </div>
          <p className='py-4 text-yellow-450 text-16 leading-32 pl-2 pr-5'>
            {content}
          </p>
        </div>
      ) : (
        <div className='flex cursor-pointer' onClick={onClickTimeLine}>
          <div className='flex flex-col items-center flex-shrink-0 w-4'>
            <Image src={active ? dotActive : dot} alt='Sphinx Software' />
            <Line />
          </div>
          <div className={`-mt-2.5 ${lastItem ? 'pb-0' : 'pb-11'}`}>
            <p
              className={classNames(
                ['text-16 leading-32 px-3'],
                [active ? 'text-yellow-450' : 'text-gray-350']
              )}
            >
              {content}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

const Line = () => {
  return <div className='border border-black-300 w-full h-0 md:h-full md:w-0' />
}

export default ResearchDevelopment
