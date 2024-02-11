// import React from 'react'
import Hero from "../components/Home Gov/Hero"
import WhyUs from "../components/Home Gov/Why Us";
import GovHub from "../components/Home Gov/Gov Hub";
import Testimonials from "../components/Home Ind/Testimonial"
import Companies from "../components/Home Ind/Companies";

function GovernmentHome() {
  return (
    <div>
      <Hero />
      <Companies />
      <WhyUs />
      <GovHub />
      <Testimonials />
    </div>
  );
}

export default GovernmentHome