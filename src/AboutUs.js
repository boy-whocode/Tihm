import Menu from './Components/NavBarNew'
import AboutUsLandingPage from "./Components/AboutUsMain/AboutUsLanding"
import Footer from "./Components/Footer"
import Contact from './Components/Contact';

const AboutUsMain=()=>{
    return (
      <>
        <Menu color="black" />
        <Contact />

        <AboutUsLandingPage />
        <Footer />
      </>
    );
}
export default AboutUsMain;