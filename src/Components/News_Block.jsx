import Button from '@material-ui/core/Button';
import NewsData from './Data'

const News =(props)=>{
    return(
        <> 
          <div className="row latest_news bot_bor">
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
              <img
                className="w-100 h-100"
                src={props.imgsrc}
                alt
              />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 news">
              <ul>
                <li>{props.title}</li>
                <li>
                  <a href={props.btnlink}>
                    {/* <button>Apply Now</button> */}
                    <Button  className="newsbutton">
                    Apply Online
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
    )
}
export default News;