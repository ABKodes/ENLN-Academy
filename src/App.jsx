import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderBefore from "./components/Reusable Components/HeaderBefore";
import HeaderGov from "./components/Reusable Components/Header Gov";
import HeaderOrg from "./components/Reusable Components/Header Org";
function App() {
  return (
    <>
      <HeaderOrg />
      <br />
      <HeaderGov />
      <br />
      <HeaderBefore />
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
