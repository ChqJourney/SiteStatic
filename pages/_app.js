import '../styles/globals.css'
import Layout from '../components/layouts/layout'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(

      <Component {...pageProps} />
  )
}

export default MyApp

