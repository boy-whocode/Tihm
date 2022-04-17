import News from './News_Block'
import NewsData from './Data'
const NewsBlog =()=>{
    return(
<>
<div class="container-fluid">
  <div className="container">
    <div className="row block_two">
      <div
        className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mar_bot"
      >
          <span>Latest News.</span>
          {NewsData.map((val)=>{
            return(
              <News 
              imgsrc={val.imgsrc}
              title={val.title}
              btnlink={val.btnlink}
              />
            );
          })}
        <div className="more_item">
          <p>
            VIEW ALL NEWS
            <i className="fa fa-chevron-circle-right" aria-hidden="true" />
          </p>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 latest_blog">
        <div
          className="row latest_news"
        >
          <span>Latest Blog.</span>
          {/* <img src alt /> */}
          <span>
            Due to pandemic situation all the offline batches are suspended
            until new guide lines.
          </span>
          <p>Registration for online courses are open now</p>
          <div className="more_item">
            <p>
              <a href="./Apply_Online.html">
                Click to Register
                <i className="fa fa-chevron-circle-right" aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
    )
}
export default NewsBlog;