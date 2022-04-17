import { MvgData } from "../Data";
import MvgBlock from "./MvgBlock";

const MVG = ()=>{
    return(
        <>
<div className="container-fluid mt-5">
  <div className="container">
    <div className="row">
    {MvgData.map((val)=>{
            return(
                <MvgBlock 
                heading={val.heading}
                imgsrc={val.imgsrc}
                pera={val.pera}
                />
            );
        })}
    </div>
  </div>
</div>




        
        </>
    );
}
export default MVG;