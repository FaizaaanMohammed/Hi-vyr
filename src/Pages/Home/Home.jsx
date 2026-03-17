import React from 'react'
import Hero from './Components/Hero'
import FAQSection from './Components/Faq'
import OfferSection from './Components/Offer'
import WhyItMatters from './Components/Matters'
import WebsitePackages from './Components/Websitepackage'
import WhyUs from './Components/Whyus'
import Testimonials from './Components/Testimonial'
import AddOnServices from './Components/AddonService'
import ValueSection from './Components/Valuesection'

const Home = () => {
  return (
    <>
       <Hero/>
       
       <WhyItMatters/>
       <WebsitePackages/>
       <WhyUs/>
       <Testimonials/>
       <AddOnServices/>
       <OfferSection/>
       <FAQSection/>
    </>
  )
}

export default Home
