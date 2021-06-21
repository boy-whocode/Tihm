import WhyChooseUsBlock from "./WhyChooseUsBlock"
import {WhyChooseUsData} from "../Data"

const WhyChooserUs =() =>{
    return(
        <>
        <div class="container-fluid mt-5">
  <div class="container">
    <h3>Why Choose Us</h3>
    <div class="row">
    {WhyChooseUsData.map((val)=>{
            return(<>
            <WhyChooseUsBlock
                imgsrc={val.imgsrc}
                title={val.title}
                pera={val.pera}
            />
            </>);
        })}
    </div>
  </div>
</div>






        
        </>
    )
}
export default WhyChooserUs;