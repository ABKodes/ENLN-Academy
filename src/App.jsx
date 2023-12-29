import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderAfter from "./components/Reusable Components/HeaderAfter";
import HeaderLesson from "./components/Reusable Components/Header Lesson";
import Hero from "./components/Home Ind/Hero";
import VerticalCard from "./components/Reusable Components/VerticalCard";
// import Companies from "./components/Home Ind/Companies";
import CardDescription from "./components/Reusable Components/Card Description";
import Login from "./pages/Login";

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
