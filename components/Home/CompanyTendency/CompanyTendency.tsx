import { FunctionComponent } from 'react'
import CompanyStrength from './CompanyStrengths'

const CompanyTendency: FunctionComponent = () => {
  return (
    <div
      style={{ backgroundImage: "url('/companyTendencyBg.png')" }}
      className='bg-cover bg-top px-3 py-24'
    >
      <div className='text-center mx-auto w-full md:w-2/3 xl:w-1/2'>
        <h2 className='text-white font-normal text-2xl text-center leading-8'>
          The trend of technology-based development is the future trend of the
          world
        </h2>
        <h3 className='text-center text-gray-350 text-sm py-2 leading-7'>
          Technology to become the competitive advantage of businesses increases
          dramatically.
        </h3>
      </div>
      <div className='px-0 lg:px-24'>
        <CompanyStrength />
      </div>
    </div>
  )
}

export default CompanyTendency