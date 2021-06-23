import { FunctionComponent } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className='font-ABeeZee'>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
