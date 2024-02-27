import Hero from '../components/Home Ind/Hero';
import Companies from '../components/Home Ind/Companies';
import WhatWeOffer from '../components/Home Ind/WhatWeOffer';
import BroadSelection from '../components/Home Ind/BroadSelection';
import Benefits from '../components/Home Ind/Benefits';
import FAQ from '../components/Home Ind/FAQ';
import Testimonial from '../components/Home Ind/Testimonial';
import RegisterToday from '../components/Home Ind/RegisterToday';
function IndHomePage() {
  return (
    <div>
      <Hero />
      <Companies/>
      <WhatWeOffer />
      <BroadSelection />
      <Benefits />
      <FAQ />
      <Testimonial />
      <RegisterToday />
    </div>
  );
}

export default IndHomePage