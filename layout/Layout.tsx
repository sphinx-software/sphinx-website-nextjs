import { FunctionComponent } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default Layout
