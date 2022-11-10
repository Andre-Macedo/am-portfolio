import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from "framer-motion"
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
