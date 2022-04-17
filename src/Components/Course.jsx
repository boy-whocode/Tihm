import CourseBlock from './CourseBlock'
import {CourseData} from './Data'
const MainCourse =()=>{
    return(
        <>
       <div className="container-fluid padd_top">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="block_4">
          <h3>Course</h3>
        </div>
      </div>
    </div>
    <div className="cources_list row ">
        
        {CourseData.map((val)=>{
          return(
            <CourseBlock 
            // imgsrc={val.imgsrc}
            imgsrc={val.imgsrc}
            duration={val.duration}
            title={val.title}
            code={val.code}
            link={val.link}
          />
          );
        })}
    </div>
  </div>
</div>

        </>
    )
}
export default MainCourse;