import { useState } from "react";

const CourseSubBlock =(props)=>{
  const [expand,setExpand]=useState(false);
  const expanding =() =>{
    setExpand(!expand);
    console.log(expand, props.heading, className.join(' '));
  }
  const className = ["course_details",expand ? 'course_details--expand':null]
    return(
        <>
<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 coursecard">
  <div className="course_card_inn mx-auto">
    <div className="cousecard_img">
      <img src={props.img} alt />
    </div>
    <div className={className.join(' ')}>
      <h4>{props.heading}</h4>
      <p>
          {props.pera}
      </p>
    </div>
    <button 
    // onClick={()=>setExpand(true)}
    onClick={expanding}
    >
      READ MORE
    </button>
  </div>
</div>
        </>
    );
}
export default CourseSubBlock;