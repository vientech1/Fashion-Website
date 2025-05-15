import React from 'react'
import BlogList from '../Components/BlogList'
import CatSection from '../Miscellaneous/CatSection'
import TopProducts from '../Miscellaneous/TopProducts'
import HeroSection from '../Components/HeroSection'
import DRIP from '../Miscellaneous/DRIP'

function Homepage() {
  return (
    <>
    <HeroSection/>
    <TopProducts/>
    {/* <DRIP/> */}
    <CatSection/>
    
    <BlogList/>
    </>
  )
}

export default Homepage