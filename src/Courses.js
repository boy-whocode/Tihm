import Menu from './Components/NavBarNew'
import Course from "./Components/Courses/Course";
import Footer from "./Components/Footer"
import { CoursesLanding } from "./Components/Landing_Block"
import {CoursesMainData} from "./Components/Data"
import Contact from './Components/Contact';

const Courses =() =>{
    return (
      <>
        <Menu color="white" />
        <Contact />

        <CoursesLanding
          class={CoursesMainData[0].class}
          pageHeading={CoursesMainData[0].pageHeading}
        />
        <Course
          img={CoursesMainData[0].img}
          courseName={CoursesMainData[0].courseName}
          courseDetail={CoursesMainData[0].courseDetail}
        />
        <Footer />
      </>
    );
}
export default Courses;
