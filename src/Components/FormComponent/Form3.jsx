import React from 'react'

const Form3 = () => {
  return (
    <div>
         <div class="form-container">
        <h2>Personal Details</h2>
        <form >
          <div class="form-group">
            <label >First Name</label>
            <input type="text" id="fname" name="fname"  />
          </div>
          <div class="form-group">
            <label >Last Name Name</label>
            <input type="text" id="lname" name="fname"  />
          </div>
         
         

          <div class="form-group">
            <label for="price">
              Gender: Male
              <input
                name="red"
                type="radio"
                id="gender"
                value="male"
                
              />
              Female
              <input
                name="red"
                type="radio"
                id="gender"
                value="female"
                
              />
              Others
              <input
                name="red"
                type="radio"
                id="gender"
                value="others"
                
              />
            </label>
          </div>
          

          <div class="form-group submit">
            <button type="button" onClick={(e)=>{
             
            }}>Next</button>
          </div>
        </form>
        
      </div>
    </div>
  )
}

export default Form3