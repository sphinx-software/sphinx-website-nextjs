import { FunctionComponent } from 'react'
import CompanyStrength from './CompanyStrengths'

const CompanyTendency: FunctionComponent = () => {
  return (
    <div
      style={{ backgroundImage: "url('/companyTendencyBg.svg')" }}
      className='bg-cover bg-top mt-20 py-24 md:py-36'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='text-center mx-auto w-full md:w-2/3'>
          <h2 className='px-1 md:px-0 text-white font-normal text-36 text-center leading-56'>
            The trend of technology-based development is the future trend of the
            world
          </h2>
          <h3 className='text-center text-gray-350 text-16 py-2 leading-36'>
            Technology to become the competitive advantage of businesses
            increases dramatically.
          </h3>
        </div>
        <div className='px-0 mt-14 md:mt-0'>
          <CompanyStrength />
        </div>
      </div>
    </div>
  )
}

export default CompanyTendency
