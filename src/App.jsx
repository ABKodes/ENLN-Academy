import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderLesson from "./components/Reusable Components/Header Lesson";
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword";
// import Companies from "./components/Home Ind/Companies";
import OrgHero from "./components/Home Org/Hero";
import Partners from "./components/Home Org/Partners";
import HeaderOrg from "./components/Reusable Components/Header Org";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* <HeaderOrg /> */}
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
        {/* <Hero /> */}
        <br />
        <Footer />
        <br />
        <FooterGov />
        <br />
        <FooterOrg />
      </div>
      {/* <HorizontalCard /> */}
      {/* <Companies /> */}
    </>
  );
}

export default App;
