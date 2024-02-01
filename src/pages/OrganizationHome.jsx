import Hero from '../components/Home Org/Hero'
import Partners from "../components/Home Org/Partners";
import Enhanceexperiance from "../components/Home Org/Enhance experiance";
import WhyUs from "../components/Home Org/Why Us";
import Testimonial from "../components/Home Ind/Testimonial";

function OrganizationHome() {
  return (
    <>
      <div className="h-screen">
        <Hero />
      </div>
      <Partners />
      <Enhanceexperiance />
      <WhyUs />
      <Testimonial />
    </>
  );
}

export default OrganizationHome