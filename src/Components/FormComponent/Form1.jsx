import React, { useerrstate } from "react";

const Form1 = ({ formdata, setFormdata }) => {
  return (
    <div>
      <h2>Educational Details</h2>
      <form>
        <div class="form-group">
          <label>College Name</label>
          <input
            type="text"
            id="colgname"
            name="colgname"
            value={formdata.colgname}
            onChange={(event) =>
              setFormdata({ ...formdata, colgname: event.target.value })
            }
          />
          <p style={{ color: "red" }}>{formdata.errors.colgname}</p>
        </div>
        
        {/* <div class="form-group">
          <label>Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formdata.degree}
            onChange={(event) =>
              setFormdata({ ...formdata, degree: event.target.value })
            }
          />
          <p style={{ color: "red" }}>{formdata.errors.degree}</p>
        </div> */}

        <div class="form-group">
            <label for="option">Degree:</label>
            <select
              id="option"
              value={formdata.degree}
              name="category"
              onChange={(event) =>
                setFormdata({ ...formdata, degree: event.target.value })
              }
            >
              <option value="">Select</option>
              <option value="Enge">Eng</option>
              <option value="Bsc">Bsc</option>
              <option value="Bcom">Bcom</option>
              <option value="BA">BA</option>
            </select>
            <p style={{ color: "red" }}>{formdata.errors.degree}</p>
          </div>
        
        <div class="form-group">
          <label>University</label>
          <input type="text" 
          id="univ" 
          name="univ" 
          value={formdata.univ}
          onChange={(event) =>
            setFormdata({ ...formdata, univ: event.target.value })
          }
           />
           <p style={{ color: "red" }}>{formdata.errors.univ}</p> 
        </div>
        

        {/* <div class="form-group submit">
          <button type="submit">Next-page-form2</button>
        </div> */}
      </form>
    </div>
  );
};

export default Form1;
