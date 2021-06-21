import Menu from './Components/NavBarNew'
import AviationBlock from "./Components/Courses/Aviation"
import Course from "./Components/Courses/Course";
import Footer from "./Components/Footer"
import { CoursesLanding } from "./Components/Landing_Block"
import {CoursesMainData} from "./Components/Data"

const Aviation =() =>{
    return(
        <>
        <Menu 
            color='white'
        />
        <CoursesLanding 
        class={CoursesMainData[1].class}
        pageHeading={CoursesMainData[1].pageHeading}
        />
        <AviationBlock 
            img={CoursesMainData[1].img}
            courseName={CoursesMainData[1].courseName}
            courseDetail={CoursesMainData[1].courseDetail}
        />
        <Footer />
        </>
    );
}
export default Aviation;
