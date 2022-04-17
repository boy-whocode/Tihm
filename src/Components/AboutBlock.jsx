const AboutBlock = (props) =>{
    return(
        <>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 about" data-aos="fade-right">
        <div className="we_are">
          <h4>{props.heading}</h4>
          <div className="eline" />
          <p>

            {props.content1}
          </p><p>
            {props.content2}
          </p>
        </div>
        <div className="know_more">
          <ul>
            <li><div className="line" /></li>
            <li><a href={props.link}> READ MORE</a></li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default AboutBlock;