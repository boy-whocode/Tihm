import Menu from './Components/NavBarNew'
import About from "./Components/AboutUs"
import Contact from "./Components/Contact";
import MainCourse from "./Components/Course";
import Enquire from "./Components/Enquire";
import Footer from "./Components/Footer";
import Head from "./Components/Header";
import MainLanding from "./Components/Landing_Block";
import NewsBlog from "./Components/News_Blog";

function Home() {
  return (
   <>
      <Menu 
   color='black'
   />
   <Contact />
   <MainLanding />
   <NewsBlog />
   {/* <MainSlider /> */}
   <About />
   <MainCourse />
   <Enquire />
   <Footer />
   </>
  );
}

export default Home;