import React, { useState } from 'react'

import './Booking.css'
import BookingDetails from './BookingDetails';
import { useNavigate } from 'react-router-dom';

const Booking = () => {

    let navigate = useNavigate()
    const MyContext = React.createContext();

    const [state, setBookstate] = useState({
        category: "", subcate: "", city: "", pname: "", price: "", check: "",
        errors: { category: "", subcate: "", city: "", pname: "", price: "", check: "" }
    })

    const [formstate, setformstate] = useState({})

    const [check, setCheck] = useState(false)

    console.log("statefff", state)

    // handle change
    const handleChange = (event) => {
        let errMsg = state.errors;
        let { name, value } = event.target;
        setBookstate({ ...state, [name]: value, errors: errMsg })
        setCheck(!check)

        switch (name) {
            case "category": errMsg.category = value.length === 0 ? "Required Field" : ""
                break;
            case "pname": errMsg.pname = value.length === 0 ? "Required Field" : ""
                break;
            case "price": errMsg.price = value.length === 0 ? "Required Field" : ""
                break;
            case "city": errMsg.city = value.length === 0 ? "Required Field" : ""
                break;
            default: console.log("The error");
                break;
        }
    }

    const validate = () => {
        let errMsg = state.errors;
        console.log("The form data is", state);
        if (state.category === "") {
            errMsg.category = "Required Field"
        }
        if (state.city === "") {
            errMsg.city = "Required Field"
        }
        if (state.pname === "") {
            errMsg.pname = "Required Field"
        }
        if (state.price === "") {
            errMsg.price = "Required Field"
        }


        setBookstate((prev) => ({ ...prev, errors: errMsg }))
    }

    // const validateNew = () => {
    //     let errMsg = state.errors;
    //     (state.errors.category.length > 0 ? <p>{state.errors.category}</p> : null)
    //     setBookstate((prev) => ({ ...prev, errors: errMsg }))
    // }

    const handleSubmit = (event) => {

        validate()


        event.preventDefault();

        setformstate(state);
        navigate("/details")
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

            {/* <BookingDetails formdata={formstate} /> */}

            <div className="form-container">
                <h2>Primary Form</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="option">Category:</label>
                        <select id="option" value={state.category} name="category" onChange={handleChange}>
                            <option value="" >Select</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    {
                        state.errors.category.length > 0 ? <p style={{ color: 'red' }}>{state.errors.category}</p> : null
                    }


                    <div class="form-group">
                        <label for="option">City:</label>
                        <select id="option" value={state.city} name="city" onChange={handleChange}>
                            <option value="" >Select</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                    {
                        state.errors.city.length > 0 ? <p style={{ color: 'red' }}>{state.errors.city}</p> : null
                    }

                    <div class="form-group">
                        <label for="pname">Product Name:</label>
                        <input type="text" id="pname" name="pname" onChange={handleChange} />
                    </div>
                    {
                        state.errors.pname.length > 0 ? <p style={{ color: 'red' }}>{state.errors.pname}</p> : null
                    }
                    <div class="form-group">
                        <label for="price">Product Price:</label>
                        <input type="price" id="price" name="price" onChange={handleChange} />
                    </div>
                    {
                        state.errors.price.length > 0 ? <p style={{ color: 'red' }}>{state.errors.price}</p> : null
                    }
                    <div class="form-group">
                        <label for="price">Gender:
                            Male
                            <input
                                name='red'
                                type="radio"
                                id="gender"
                                value="male"
                                onChange={handleChange}
                            />
                            Female
                            <input
                                name='red'
                                type="radio"
                                id="gender"
                                value="female"
                                onChange={handleChange}
                            />
                            Others
                            <input
                                name='red'
                                type="radio"
                                id="gender"
                                value="others"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="price">Please check:
                            check 1
                            <input
                                type="checkbox"
                                id="price"
                                name="check"
                                value={check}
                                onChange={handleChange}
                            />
                            check 2
                            <input
                                type="checkbox"
                                id="price"
                                name="check"
                                value={check}
                                onChange={handleChange}
                            />
                            check 3
                            <input
                                type="checkbox"
                                id="price"
                                name="check"
                                value={check}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div class="form-group submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>



            </div>

            <MyContext.Provider value={formstate}>
                <BookingDetails />
            </MyContext.Provider>

        </div>
    )
}

export default Booking