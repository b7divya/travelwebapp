import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Destinationscroll from '../Destinationscroll/Destinationscroll'
import Herocarousel from '../Herocarousel/Herocarousel'
import Featuredblogs from '../Featuredblogs/Featuredblogs'
import Footer from '../Footer/Footer'
import Spiritualtravel from '../SpiritualTravel/Spiritualtravel'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Destinationscroll />
        <Herocarousel />
        <Featuredblogs />
        <Spiritualtravel />
        <Footer />
    </div>
  )
}

export default Home