const EnquireForm=()=>{
    return(
        <>
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <div className="form">
            <div className="formbg">
              <form action="submit">
                <h3>Enquire Now</h3>
                <p>Fill in the form below and one of our counselors will contact you within one business day.</p>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="enqname" placeholder="Enter Your Name" />
                  <label htmlFor="enqname"></label>
                </div>
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="enqnum" placeholder="Enter Your Mobile Number" />
                  <label htmlFor="enqnum"></label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="enqmail" placeholder="Enter Your Mobile Number" />
                  <label htmlFor="enqmail"></label>
                </div>
                <div className="input-group mb-3">
                  <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected value="default">Select Your Course</option>
                    <option value="DHM">Hospitality Management Course</option>
                    <option value="DAS">Aviation Course</option>
                  </select>
                </div>                      
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
                  <label htmlFor="floatingTextarea"></label>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        </>
    )
}
export default EnquireForm;