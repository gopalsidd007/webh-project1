import React, { useState } from "react";

import "./Booking.css";
import BookingDetails from "./BookingDetails";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  let navigate = useNavigate();
  const MyContext = React.createContext();

  const [state, setBookstate] = useState({
    category: "",
    subcate: "",
    city: "",
    pname: "",
    price: "",
    check: [],
    errors: {
      category: "",
      subcate: "",
      city: "",
      pname: "",
      price: "",
      check: "",
    },
  });

  const [formstate, setformstate] = useState({});
  const [check, setCheck] = useState([]);

  console.log("statefff", state);

  // handle change
  const handleChange = (event) => {
    let errMsg = state.errors;
    let { name, value, checked } = event.target;

    // const { responce } = check;
    // if (checked) {
    //   setCheck(
    //     // responce: [...responce, value],
    //     (prev) => ({ ...prev, [responce]: value })
    //   );
    // }

    if (name === "check") {
      //   console.log("checkValue", value);
      let arr = state.check;

    //   console.log(
    //     "dddfdf",
    //     arr.findIndex((ele) => ele === value)
    //   );

      if (arr.findIndex((ele) => ele === value) === -1) {
        arr.push(value);
      } else {
        arr = state.check.filter((event) => event !== value);
      }

      setBookstate({
        ...state,
        [name]: arr,
        errors: errMsg,
      });
    } else {
      setBookstate({
        ...state,
        [name]: value,
        errors: errMsg,
      });
    }

    switch (name) {
      case "category":
        errMsg.category = value.length === 0 ? "Required Field" : "";
        break;
      case "pname":
        errMsg.pname = value.length === 0 ? "Required Field" : "";
        break;
      case "price":
        errMsg.price = value.length === 0 ? "Required Field" : "";
        break;
      case "city":
        errMsg.city = value.length === 0 ? "Required Field" : "";
        break;
      default:
        console.log("The error");
        break;
    }
  };

  const [fieldcheck, setFieldcheck] = useState({
    category: true,
    city: true,
    pname: true,
    price: true,
  });

  const validate = () => {
    let errMsg = {};
    console.log("The form data is", state);
    if (state.category === "") {
      errMsg.category = "Required Field";
      //   setFieldcheck({ category: false });
    }
    if (state.city === "") {
      errMsg.city = "Required Field";
      //   setFieldcheck({ city: false });
    }
    if (state.pname === "") {
      errMsg.pname = "Required Field";
      //   setFieldcheck({ pname: false });
    }
    if (state.price === "") {
      errMsg.price = "Required Field";
      //   setFieldcheck({ price: false });
    }

    setBookstate((prev) => ({ ...prev, errors: errMsg }));
    return errMsg;
  };

  // const validateNew = () => {
  //     let errMsg = state.errors;
  //     (state.errors.category.length > 0 ? <p>{state.errors.category}</p> : null)
  //     setBookstate((prev) => ({ ...prev, errors: errMsg }))
  // }

  console.log("field valid", fieldcheck);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("sdsf", Object.keys(validate()).length);

    if (Object.keys(validate()).length !== 0) {
      return;
    }
    

    navigate("/details", { state: state });
  };

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
            <select
              id="option"
              value={state.category}
              name="category"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <p style={{ color: "red" }}>{state.errors.category}</p>

          <div class="form-group">
            <label for="option">City:</label>
            <select
              id="option"
              value={state.city}
              name="city"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <p style={{ color: "red" }}>{state.errors.city}</p>

          <div class="form-group">
            <label for="pname">Product Name:</label>
            <input
              type="text"
              id="pname"
              name="pname"
              onChange={handleChange}
            />
          </div>

          <p style={{ color: "red" }}>{state.errors.pname}</p>

          <div class="form-group">
            <label for="price">Product Price:</label>
            <input
              type="price"
              id="price"
              name="price"
              onChange={handleChange}
            />
          </div>

          <p style={{ color: "red" }}>{state.errors.price}</p>

          <div class="form-group">
            <label for="price">
              Gender: Male
              <input
                name="red"
                type="radio"
                id="gender"
                value="male"
                onChange={handleChange}
              />
              Female
              <input
                name="red"
                type="radio"
                id="gender"
                value="female"
                onChange={handleChange}
              />
              Others
              <input
                name="red"
                type="radio"
                id="gender"
                value="others"
                onChange={handleChange}
              />
            </label>
          </div>
          <div class="form-group">
            <label for="price">
              Please check: check 1
              <input
                type="checkbox"
                id="price"
                name="check"
                value="check1"
                onChange={handleChange}
              />
              check 2
              <input
                type="checkbox"
                id="price"
                name="check"
                value="check2"
                onChange={handleChange}
              />
              check 3
              <input
                type="checkbox"
                id="price"
                name="check"
                value="check3"
                onChange={handleChange}
              />
            </label>
          </div>

          <div class="form-group submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
