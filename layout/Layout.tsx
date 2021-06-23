import { FunctionComponent, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuMobile from './MenuMobile'

const Layout: FunctionComponent = ({ children }) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  return (
    <>
      <Header
        isShow={isShow}
        onClick={() => {
          setIsShow((value) => !value)
        }}
      />
      <MenuMobile isShow={isShow} />
      <main className='font-ABeeZee'>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
