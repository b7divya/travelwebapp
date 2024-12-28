import React from 'react'
import Header from '../Header/Header'
import Destinationscroll from '../Destinationscroll/Destinationscroll'
import Herocarousel from '../Herocarousel/Herocarousel'
import Featuredblogs from '../Featuredblogs/Featuredblogs'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Destinationscroll />
        <Herocarousel />
        <Featuredblogs />
    </div>
  )
}

export default Home