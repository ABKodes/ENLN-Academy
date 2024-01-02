import Footer from "./components/Reusable Components/Footer";
import FooterGov from "./components/Reusable Components/FooterGov";
import FooterOrg from "./components/Reusable Components/FooterOrg";
import HeaderLesson from "./components/Reusable Components/Header Lesson";
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login"
import ForgetPassword from "./pages/ForgetPassword";
// import Companies from "./components/Home Ind/Companies";
function App() {
  return (
    <>
      <HeaderLesson />
      <br />
      <VerticalCard />
      <br />
      <br />
      <br />
      <Login />
      <ForgetPassword/>
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
