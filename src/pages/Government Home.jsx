import React from 'react'
import HeaderGov from "../components/Reusable Components/Header Gov"
import Hero from "../components/Home Gov/Hero"
import Partners from "../components/Home Gov/Partners";
import WhyUs from "../components/Home Gov/Why Us";
import GovHub from "../components/Home Gov/Gov Hub";
import Testimonials from "../components/Home Ind/Testimonial"
import FooterGov from "../components/Reusable Components/FooterGov";

function GovernmentHome() {
  return (
    <div>
      <HeaderGov />
      <Hero />
      <Partners />
      <WhyUs />
      <GovHub />
      <Testimonials />
      <FooterGov />
    </div>
  );
}

export default GovernmentHome