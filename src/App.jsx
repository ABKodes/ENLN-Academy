import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderLesson from "./components/Reusable Components/Header Lesson";
import VerticalCard from "./components/Reusable Components/VerticalCard";
// import Companies from "./components/Home Ind/Companies";
import CardDescription from "./components/Reusable Components/Card Description";
import HorizontalCard from "./components/Reusable Components/HorizontalCard";

function App() {
  return (
    <>
      <HeaderLesson />
      <br />
      <VerticalCard />
      <br />
      <Login />
      <br />
      <br />
      {/* <HeaderAfter /> */}
      {/* <Hero /> */}
      <br />
      <Footer />
      <br />
      <FooterGov />
      <br />
      <FooterOrg />
      {/* <HorizontalCard /> */}
      {/* <Companies /> */}
    </>
  );
}

export default App;
