import Menu from './Components/NavBarNew'
import AboutUsLandingPage from "./Components/AboutUsMain/AboutUsLanding"
import Footer from "./Components/Footer"

const AboutUsMain=()=>{
    return(
        <>
            <Menu 
                color='black'
            />
        <AboutUsLandingPage />
        <Footer />
        </>
    );
}
export default AboutUsMain;