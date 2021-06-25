import { FunctionComponent } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const SphinxMap = dynamic(() => import('./SphinxMap'), {
  ssr: false
})

const CommunicationSection: FunctionComponent = () => {
  return (
    <section
      className={
        'bg-gradient-to-t from-yellow-250 via-orange-450 to-yellow-850'
      }
    >
      <div
        className='bg-repeat-x bg-bottom'
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: 'url(/Land.svg)'
        }}
      >
        <div className='md:flex max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 pb-72 md:pt-36 sm:pt-20 leading-11'>
          <div className='md:flex-1 text-white items-center md:mb-0 sm:mb-5'>
            <div className='flex'>
              <div className='pr-3 flex-shrink-0'>
                <span>
                  <Image
                    src={'/iconLocation.svg'}
                    height={16}
                    width={16}
                    alt={'location'}
                  />
                </span>
              </div>
              <div>
                8th Floor, HH- Truong Thinh Building, No.1, Phung Chi Kien Str,
                Cau Giay Distr, Ha Noi.
              </div>
            </div>
            <div className='flex'>
              <div className='pr-3 flex-shrink-0'>
                <span>
                  <Image
                    src={'/iconMail.svg'}
                    height={13}
                    width={13}
                    alt={'mail'}
                  />
                </span>
              </div>
              <div>contact@sphinx-software.com</div>
            </div>
            <div className='flex'>
              <div className='pr-3 flex-shrink-0'>
                <span>
                  <Image
                    src={'/iconCall.svg'}
                    height={14}
                    width={14}
                    alt={'phone'}
                  />
                </span>
              </div>
              <div>(+84)24 2266 3888</div>
            </div>
            <div className='flex'>
              <div className='pr-3 flex-shrink-0'>
                <span>
                  <Image
                    src={'/iconLink.svg'}
                    height={13}
                    width={13}
                    alt={'page'}
                  />
                </span>
              </div>
              <div>https://sphinx.vn</div>
            </div>
          </div>
          <div className='flex md:flex-1 items-center justify-center md:justify-end md:mt-0 mt-5'>
            <SphinxMap />
          </div>
        </div>
      </div>
    </section>
  )
}
export default CommunicationSection
