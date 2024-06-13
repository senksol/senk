import Header from './components/Header'
import Banner from './components/Banner'
import SiteMarquee from './components/SiteMarquee'
import HowToBuy from './components/HowToBuy'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Faq from './components/Faq'
import { useEffect } from 'react'
import Aos from 'aos'

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 })
  })
  return (
    <>
      <Header />
      <Banner />
      <SiteMarquee />
      <HowToBuy />
      <Roadmap />
      <Faq />
      <SiteMarquee />
      <Footer />
    </>
  )
}
