import React, { useState } from "react";

const Form1 = ({ setForm2state }) => {
  const [state, setEdudetails] = useState({
    colgname: "",
    degree: "",
    univ: "",
    errors: { colgname: "", degree: "", univ: "" },
  });

  const validate = () => {
    let errMsg = {};
    
    if (state.colgname === "") {
      errMsg.colgname = "Required Field";
    }
    if (state.degree === "") {
      errMsg.degree = "Required Field";
      
    }
    if (state.univ === "") {
      errMsg.univ = "Required Field";
      
    }

    setEdudetails((prev) => ({ ...prev, errors: errMsg }));
    return errMsg;
  };

  const handleform1 = (event) => {
    event.preventDefault();
    if (Object.keys(validate()).length !== 0) {
      return;
    }
    
        setForm2state(true);
    
  };
  return (
    <div>
      <h2>Educational Details</h2>
      <form onSubmit={handleform1}>
        <div class="form-group">
          <label>College Name</label>
          <input type="text" id="colgname" name="colgname" />
        </div>
        <p style={{ color: "red" }}>{state.errors.colgname}</p>
        <div class="form-group">
          <label>Degree</label>
          <input type="text" id="degree" name="degree" />
        </div>
        <p style={{ color: "red" }}>{state.errors.degree}</p>
        <div class="form-group">
          <label>University</label>
          <input type="text" id="univ" name="univ" />
        </div>
        <p style={{ color: "red" }}>{state.errors.univ}</p>

        <div class="form-group submit">
          <button type="submit">Next-page-form2</button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
