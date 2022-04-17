const WhyChooseUsBlock=(props)=>{
    return(
        <>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration={500}>
  <div className="choose_us_card mx-auto">
    <div className="choose_us_img my-3">
      <img className="h-100" src={props.imgsrc} alt />
    </div>
    <h5>{props.title}</h5>
    <p>{props.pera}</p>
  </div>
</div>

        </>
    );
}
export default WhyChooseUsBlock;