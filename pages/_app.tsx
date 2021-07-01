import type { AppProps } from 'next/app'
import './../styles/globals.css'
import ConfigProvider from '../ui/ConfigProvider'
import * as config from './../config'
import 'animate.css/animate.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider config={config}>
      <Component {...pageProps} />
    </ConfigProvider>
  )
}

export default MyApp
