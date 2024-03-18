import React from 'react'

const Form2 = () => {
  return (
    <div>
         <h2>Professional  Details</h2>
        <form >
          <div class="form-group">
            <label >Company Name</label>
            <input type="text" id="compname" name="compname"  />
          </div>
          <div class="form-group">
            <label >Position</label>
            <input type="text" id="pos" name="pos"  />
          </div>
          <div class="form-group">
            <label >Experience</label>
            <input type="text" id="exp" name="exp"  />
          </div>
         
         <div class="form-group submit">
            <button type="button">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Form2