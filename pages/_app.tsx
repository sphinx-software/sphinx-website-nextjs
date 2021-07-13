import type { AppProps } from 'next/app'
import './../styles/globals.css'
import ConfigProvider from '../ui/ConfigProvider'
import * as config from './../config'
import 'animate.css/animate.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
// @ts-ignore
import MessengerCustomerChat from 'react-messenger-customer-chat'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider config={config}>
      <Component {...pageProps} />
      {process.browser && (
        <MessengerCustomerChat
          pageId='106048001496550'
          htmlRef={window.location.pathname}
        />
      )}

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
