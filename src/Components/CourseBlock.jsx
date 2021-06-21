const CourseBlock=(props)=>{
    return(
        <>
        <div className="course col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="zoom-in">
        <div className="course_block pb-2 mx-auto mt-5">
          <div className="courseimg">
            <img src={props.imgsrc} alt />
          </div>
          <ul>
            <li>
              <i className="fa fa-calendar" aria-hidden="true" />
            </li>
            <li>{props.duration}</li>
          </ul>
          <span> {props.title} </span>
          <p> {props.title} <br /> {props.code} </p>
          <div className="know_more">
            <ul>
              <li>
                <div className="line" />
              </li>
              <li><a href={props.link}>View Course</a></li>
            </ul>
          </div>
        </div>
      </div>
        </>
    )
}
export default CourseBlock;