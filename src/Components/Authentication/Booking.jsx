import React, { useState } from 'react'
import BookingDetails from './BookingDetails';
import './Booking.css'

const Booking = () => {

    const [state, setBookstate] = useState({
        category: "", subcate: "", city: "", pname: "", price: "", check: "",
        errors: {category: "", subcate: "", city: "", pname: "", price: "", check: ""}
    })
    const [formstate, setformstate] = useState({})

    let errMsg=state.errors;

    const handleChange = (event) => {
        let { name, value } = event.target;
        setBookstate({ ...state, [name]: value })

        switch (name) {
            case "category": errMsg.category= value.length === 0 ? "Required Field" : ""
              break;
            case "pname": errMsg.pname= value.length === 0 ? "Required Field" : ""
              break;
            case "price": errMsg.price = value.length === 0 ? "Required Field" : ""
              break;
      
            default: console.log("The error");
              break;
          }
        

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("The form data is", state);
        setformstate(state)
    }

    return (
        <div>


            {/* <form onSubmit={handleSubmit}>
            <label htmlFor="">Persons Name</label>
            <input name="name" onChange={handleChange}/>

            <label htmlFor="">Gender
            <input type='radio' name="gender" value='male' onChange={handleChange}/>Male
            <input type='radio' name="gender" value='female' onChange={handleChange}/>Female
            </label>
            <label htmlFor="">Profession</label>
            <input name="prof" onChange={handleChange}/>
            <label htmlFor="">City</label>
            <select name="city" onChange={handleChange}>
                <option value="Kolkata">kOLKATA</option>
                <option value="mumbai">MUMBAI</option>
                <option value="delhi">DELHI</option>
                <option value="chennai">CHENNAI</option>
            </select>
            <button type='submit'>
                Submit
            </button>
        </form> */}

            {/* <BookingDetails  formdata={formstate} /> */}

            <div class="form-container">
                <h2>Primary Form</h2>
                <form onSubmit={handleSubmit} >
                    <div class="form-group">
                        <label for="option">Category:</label>
                        <select id="option" name="category"  onChange={handleChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="option">Sub Category:</label>
                        <select id="option" name="subcate" onChange={handleChange} >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="option">City:</label>
                        <select id="option" name="city" onChange={handleChange}>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="pname">Product Name:</label>
                        <input type="text" id="pname" name="pname" required onChange={handleChange} />
                    </div>
                    {
                        state.errors.pname.length > 0 ? <p style={{ color:'red'}}>{state.errors.pname}</p> : null
                    }
                    <div class="form-group">
                        <label for="price">Product Price:</label>
                        <input type="price" id="price" name="price" required onChange={handleChange} />
                    </div>
                    {
                        state.errors.price.length > 0 ? <p style={{ color:'red'}}>{state.errors.price}</p> : null
                    }
                    <div class="form-group">
                        <label for="price">Gender:
                            Male
                            <input type="radio" id="gender" value="male" required onChange={handleChange} />
                            Female
                            <input type="radio" id="gender" value="female" required onChange={handleChange} />
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="price">You Want to check:
                            <input type="checkbox" id="price" name="check" required onChange={handleChange} />
                        </label>
                    </div>

                    <div class="form-group submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Booking