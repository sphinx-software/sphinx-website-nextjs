import { FunctionComponent } from 'react'
import Image from 'next/image'

const Footer: FunctionComponent = () => {
  return (
    <>
      <footer className='flex bg-violet-550 h-12 items-center justify-center'>
        <div className={'text-white font-ABeeZee'}>
          Copyright © SPHINX 2021. All rights reserved
        </div>
      </footer>
    </>
  )
}
export default Footer
