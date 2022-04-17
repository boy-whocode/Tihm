import AboutBlock from './AboutBlock'
import {AboutUsData} from './Data'
const About = () =>{
    return(
        <>
<div className="container-fluid about_block">
  <div className="container">
    <div className="row block_4">
      <AboutBlock 
        heading={AboutUsData[0].heading}
        content1={AboutUsData[0].content1}
        content2={AboutUsData[0].content2}
        link={AboutUsData[0].link}
      />
      <div className="col-xl-2 col-lg-2 col-md-2 d-sm-none d-md-block line_img">
        <img className="w-50 h-100 mx-auto" src="./image/center.png" alt />
      </div>
      <AboutBlock 
        heading={AboutUsData[1].heading}
        content1={AboutUsData[1].content1}
        content2={AboutUsData[1].content2}
        link={AboutUsData[1].link}
      />
    </div>
  </div>
</div>

        </>
    )
}

export default About;