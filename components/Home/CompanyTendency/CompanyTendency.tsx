import { FunctionComponent } from 'react'
import CompanyStrength from './CompanyStrengths'
import ScrollAnimation from 'react-animate-on-scroll'

const CompanyTendency: FunctionComponent = () => {
  return (
    <section
      style={{ backgroundImage: "url('/companyTendencyBg.svg')" }}
      className='bg-white bg-cover bg-top py-24 md:py-36 -mt-2'
    >
      <div className='mx-auto max-w-7xl px-6 xl:px-0'>
        <div className='text-center mx-auto w-full md:w-2/3'>
          <ScrollAnimation animateIn='animate__fadeInUp' animateOnce>
            <h2 className='px-1 md:px-0 text-white font-normal text-36 text-center leading-56'>
              The trend of technology-based development is the future trend of
              the world
            </h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn='animate__fadeInUp'
            delay={450}
            animateOnce
          >
            <h3 className='text-center text-gray-350 text-16 py-2 leading-36'>
              Technology to become the competitive advantage of businesses
              increases dramatically.
            </h3>
          </ScrollAnimation>
        </div>
        <div className='px-0 mt-14 md:mt-0'>
          <CompanyStrength />
        </div>
      </div>
    </section>
  )
}

export default CompanyTendency
