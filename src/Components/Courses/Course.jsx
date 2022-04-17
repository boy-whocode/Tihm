import {CoursesSubBlocksData} from '../Data'
import CourseSubBlock from './CourseSubBlock';
const Course =(props)=>{
  return(
    <>
<div className="container-fluid">
  <div className="container about_course">
    <img className="w-100" data-aos="fade-up" src={props.img} alt />
    <h2>{props.courseName}</h2>
    <p>
      {props.courseDetail}
    </p>
    <div className="row cources_list">
        {CoursesSubBlocksData.map((val)=>{
          return (
            <CourseSubBlock 
            img={val.img}
            heading={val.heading}
            pera={val.pera}
            />
          );
        })}
        
    </div>
  </div>
</div>

        </>
    );
}
export default Course;