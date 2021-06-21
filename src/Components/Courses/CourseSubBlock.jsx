const CourseSubBlock =(props)=>{
  // function expand(btn){
  //   var height = $(btn).prev().innerHeight();
  //   console.log(height)
  //   if (height === 250){
  //     $(btn).html('READ LESS')
  //     $(btn).prev().css({'height':'auto'})
  //   }
  //   else{
  //     $(btn).html('READ MORE')
  //     $(btn).prev().css({'height':'250'})
  //   }
  // }
    return(
        <>
<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 coursecard">
  <div className="course_card_inn mx-auto">
    <div className="cousecard_img">
      <img src={props.img} alt />
    </div>
    <div className="course_details">
      <h4>{props.heading}</h4>
      <p>
          {props.pera}
      </p>
    </div>
    <button onClick="expand(this)">
      READ MORE
    </button>
  </div>
</div>
        </>
    );
}
export default CourseSubBlock;