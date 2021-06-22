import { FunctionComponent } from 'react'
import Image from 'next/image'

const Footer: FunctionComponent = () => {
  return (
    <>
      <div
        className={
          'bg-gradient-to-t from-yellow-250 via-orange-450 to-gray-850'
        }
      >
        <div
          className='bg-no-repeat bg-bottom'
          style={{
            height: '100%',
            backgroundImage: 'url(/Land.svg)'
          }}
        >
          <div className='flex max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 pb-24'>
            <div className={'flex flex-1 flex-row'}>
              <div className={'flex-1'}>
                <Image
                  src={'/symbolSphinx.svg'}
                  height={40}
                  width={40}
                  alt={'Sphinx Software'}
                />
                <h3 className={'text-gray-350 leading-10'}>SERVICES</h3>
                <div className={'text-white leading-9'}>
                  <div>Cloud</div>
                  <div>Web</div>
                  <div>Application</div>
                  <div>Cross-platform</div>
                </div>
              </div>
              <div className={'flex-1'}>
                <h3 className={'text-gray-350 leading-10'}>ABOUT SPHINX</h3>
                <div className={'text-white leading-9'}>
                  <div>Developing history</div>
                  <div>Vision and Mission</div>
                  <div>Key holders</div>
                  <div>R&D</div>
                  <div>Achievements</div>
                </div>
              </div>
            </div>
            <div className={'flex flex-1 items-center justify-center'}>
              git hub
            </div>
          </div>
          <div className='flex max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 pb-72'>
            <div className={'flex-1 text-white leading-10 items-center'}>
              <div>
                <span>
                  <Image
                    src={'/iconLocation.svg'}
                    height={20}
                    width={20}
                    alt={'location'}
                  />
                </span>
                &nbsp; 8th Floor, HH- Truong Thinh Building, No.1, Phung Chi
                Kien Str, Cau Giay Distr, Ha Noi.
              </div>
              <div>
                <span>
                  <Image
                    src={'/iconMail.svg'}
                    height={16}
                    width={16}
                    alt={'mail'}
                  />
                </span>
                &nbsp; contact@sphinx-software.com
              </div>
              <div>
                <span>
                  <Image
                    src={'/iconCall.svg'}
                    height={16}
                    width={16}
                    alt={'phone'}
                  />
                </span>
                &nbsp; (+84)24 2266 3888
              </div>
              <div>
                <span>
                  <Image
                    src={'/iconLink.svg'}
                    height={16}
                    width={16}
                    alt={'page'}
                  />
                </span>
                &nbsp; https://sphinx.vn
              </div>
            </div>
            <div className={'flex flex-1 items-center justify-center'}>
              git hub
            </div>
          </div>
        </div>
      </div>
      <footer className={'flex bg-violet-550 h-10 items-center justify-center'}>
        <div className={'text-white font-ABeeZee'}>
          Copyright © SPHINX 2021. All rights reserved
        </div>
      </footer>
    </>
  )
}
export default Footer
