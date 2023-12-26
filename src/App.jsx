import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderBefore from "./components/Reusable Components/HeaderBefore";
import HeaderGov from "./components/Reusable Components/Header Gov";
import Hero from "./components/Home Ind/Hero";
function App() {
  return (
    <>
      <br />
      <HeaderGov />
      <br />
      <br />
      <br />
      <HeaderBefore  />
      <Hero/>
      <br />
      <Footer />
      <br />
      <FooterGov />
      <br />
      <FooterOrg />
    </>
  );
}

export default App;
