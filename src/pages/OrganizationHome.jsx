import HeaderOrg from "../components/Reusable Components/Header Org"
import Hero from '../components/Home Org/Hero'
import Partners from "../components/Home Org/Partners";

function OrganizationHome() {
  return (
    <>
      <div className="h-screen">
        <HeaderOrg />
        <Hero />
      </div>
      <Partners />
      
    </>
  );
}

export default OrganizationHome