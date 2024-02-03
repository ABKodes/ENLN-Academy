// import React from 'react'
import Hero from "../components/Home Gov/Hero"
// import Partners from "../components/Home Gov/Partners";
import WhyUs from "../components/Home Gov/Why Us";
import GovHub from "../components/Home Gov/Gov Hub";
import Testimonials from "../components/Home Ind/Testimonial"
import Companies from "../components/Home Ind/Companies";

function GovernmentHome() {
  return (
    <div>
      <Hero />
      <Companies />
      {/* <Partners /> */}
      <WhyUs />
      <GovHub />
      <Testimonials />
    </div>
  );
}

export default GovernmentHome