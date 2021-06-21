import main_img from './image/main_img.png'
const MainLanding = () =>{
    return(
        <>
            <div className="container-fluid bghalf">
                <div className="container">
                    <div className="row header_block">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 heading wow fadeInLeftBig">
                            <h1>Times Institute Of Hospitality Management</h1>
                            <p>
                              Welcome to Times Institute of Hospitality Management <b>(TIHM)</b> .
                              Our mission is to attain leadership in hospitality. We achieve this
                              mission through a commitment to excel in teaching, research and
                              industry collaboration.
                            </p>
                            <div className="know_more">
                              <ul>
                                <li>
                                  <div className="line" />
                                </li>
                                <li>
                                  <a href="/AboutUsMain"> Know More</a>
                                </li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const AboutUsLanding=()=>{
  return(
    <>
    <div className="container-fluid mb-5">
      <div className="about_us_head">
        <div className="container about_heading">
          <h3>About Us</h3>
        </div>
      </div>
    </div>
    </>
  );
}

const CoursesLanding=(props)=>{
  return(
    <>
    <div className="container-fluid">
  <div className={props.class}>
    <div className="bgblack">
      <div className="col-12">
        <h1 className="wow pulse">{props.pageHeading}</h1>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default MainLanding
export {AboutUsLanding , CoursesLanding}