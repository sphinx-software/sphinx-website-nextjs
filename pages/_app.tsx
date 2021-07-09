import type { AppProps } from 'next/app'
import './../styles/globals.css'
import ConfigProvider from '../ui/ConfigProvider'
import * as config from './../config'
import 'animate.css/animate.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider config={config}>
      <Component {...pageProps} />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ConfigProvider>
  )
}

export default MyApp
