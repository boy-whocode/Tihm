const ApplyOnlineForm=()=>{
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
      // This function will display the specified tab of the form ...
      var x = document.getElementsByClassName("tab");
      x[n].style.display = "block";
      // ... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      // ... and run a function that displays the correct step indicator:
      fixStepIndicator(n)
    }

    function nextPrev(n) {
      // This function will figure out which tab to display
      var x = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // Hide the current tab:
      x[currentTab].style.display = "none";
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;
      // if you have reached the end of the form... :
      if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        // alert("form submitted")
        return false;
      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
    }
    function validateForm() {
      // This function deals with validation of the form fields
      var x, y, i, valid = true;
      x = document.getElementsByClassName("tab");
      y = x[currentTab].getElementsByTagName("input");
      // A loop that checks every input field in the current tab:
      for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
          // add an "invalid" class to the field:
          y[i].className += " invalid";
          // and set the current valid status to false:
          valid = false;
        }
      }
      // If the valid status is true, mark the step as finished and valid:
      if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
      }
      return valid; // return the valid status
    }

    function fixStepIndicator(n) {
      // This function removes the "active" class of all steps...
      var i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
      }
      //... and adds the "active" class to the current step:
      x[n].className += " active";
    }
    return(
        <>
        <div className="container-fluid regformbg">
  <form id="regForm" action onsubmit="submit()">
    <h1>Register:</h1>
    {/* One "tab" for each step in the form: */}
    <div className="tab">Name:
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">First Name</span>
        <input type="text" className="form-control" id="fname" placeholder="Enter Your First Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Last Name</span>
        <input type="text" className="form-control" placeholder="Enter Your Last Name" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>
    <div className="tab">Contact Info:
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">E-mail Address</span>
        <input type="email" className="form-control" placeholder="Enter Your E-mail Address" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Phone Number</span>
        <input type="number" className="form-control" placeholder="Enter Your Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>
    <div className="tab">Birthday:
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">D.O.B</span>
        <input type="date" className="form-control" placeholder="Select Your Date Of Birth" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>
    <div className="tab">Select Course:
      <div className="input-group mb-3">
        {/* <button class="btn btn-outline-secondary" type="button">Button</button> */}
        <span className="input-group-text" id="basic-addon1">Select Your Course</span>
        <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
          <option selected value="default">select your course</option>
          <optgroup label="Hospitality Management">
            <option value="Front Office">Front Office</option>
            <option value="FandB">F&amp;B</option>
            <option value="Housekeeping">Housekeeping</option>
          </optgroup>
          <optgroup label="Aviation">
            <option value="volvo">A</option>
            <option value="saab">B</option>
          </optgroup>
        </select>
      </div>
      {/* <select name="course" id="" oninput="this.className = ''">
        <option value="default">select your course</option>
        <optgroup label="Hospitality Management">
          <option value="Front Office">Front Office</option>
          <option value="F&B">F&B</option>
          <option value="Housekeeping">Housekeeping</option>
        </optgroup>
        <optgroup label="Aviation">
          <option value="volvo">A</option>
          <option value="saab">B</option>
        </optgroup>
      </select> */}
    </div>
    <div style={{overflow: 'auto', zIndex: 20}} className="prev_nxt_btn">
      <div>
        <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
        <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
      </div>
    </div>
    {/* Circles which indicates the steps of the form: */}
    <div style={{textAlign: 'center', marginTop: 40}}>
      <span className="step">1</span>
      <span className="step">2</span>
      <span className="step">3</span>
      <span className="step">4</span>
      {/* <span class="step"></span> */}
    </div>
  </form>
</div>

        </>
    );
}
export default ApplyOnlineForm;