import React from "react";

const Form2 = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h2>Professional Details</h2>
      <form>
        <div class="form-group">
          <label>Company Name</label>
          <input
            type="text"
            id="compname"
            name="compname"
            value={formdata.compname}
            onChange={(event) =>
              setFormdata({ ...formdata, compname: event.target.value })
            }
          />
           <p style={{ color: "red" }}>{formdata.errors.compname}</p>
        </div>
        <div class="form-group">
          <label>Position</label>
          <input type="text" 
          id="pos" name="pos" 
          value={formdata.pos} 
          onChange={(event) =>
            setFormdata({ ...formdata, pos: event.target.value })
          }
          />
           <p style={{ color: "red" }}>{formdata.errors.pos}</p>
        </div>
        <div class="form-group">
          <label>Experience</label>
          <input type="text"
           id="exp"
            name="exp" 
            value={formdata.exp} 
            onChange={(event) =>
              setFormdata({ ...formdata,exp: event.target.value })
            }
            />
             <p style={{ color: "red" }}>{formdata.errors.exp}</p>
        </div>

        {/* <div class="form-group submit">
            <button type="button">Submit</button>
          </div> */}
      </form>
    </div>
  );
};

export default Form2;
