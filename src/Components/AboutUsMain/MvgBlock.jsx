const MvgBlock =(props) =>{
    return(
        <>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-5" data-aos="zoom-out" data-aos-easing="ease-out-cubic" data-aos-duration={500}>
  <h3>{props.heading}</h3>
  <div className="mvg_card">
    <div className="mvg_img">
      <img className="w-100 h-100" src={props.imgsrc} alt />
    </div>
    <div className="mvg_text">
      <p>
        <span>
            {props.pera}
        </span>
      </p>
    </div>
  </div>
</div>

        </>
    );
}
export default MvgBlock;