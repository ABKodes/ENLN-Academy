import Hero from "./components/Home Ind/Hero"
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword";
// import Companies from "./components/Home Ind/Companies";
import OrgHero from "./components/Home Org/Hero";
import Partners from "./components/Home Org/Partners";
import HeaderOrg from "./components/Reusable Components/Header Org";
import Companies from "./components/Home Ind/Companies";
import WhatWeOffer from "./components/Home Ind/WhatWeOffer";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeaderOrg />
        <br />
        <OrgHero />
        <br />
        <div className="overflow-x-hidden">
          <Partners />
        </div>
        <br />
        <div className="overflow-x-hidden">
          <VerticalCard />
        </div>
        <br />
        <Login />
        <ForgetPassword />
        <Hero />
        <Companies />
        <WhatWeOffer />
      </div>
      {/* <HorizontalCard /> */}
      {/* <Companies /> */}
    </>
  );
}

export default App;
