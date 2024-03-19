import React, { useState } from "react";

import "./Booking.css";
import BookingDetails from "./BookingDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userform } from "../Redux/Slice/CrudSlice";

const Booking = () => {
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const [state, setBookstate] = useState({
    category: "",
    subcate: "",
    city: "",
    pname: "",
    price: "",
    red: "",
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

  const [fieldcheck, setFieldcheck] = useState({
    category: true,
    city: true,
    pname: true,
    price: true,
  });

  let nextid = 0;
  const initfield = { nweprodutct: "", newprice: "", tax: "", total: "" };
  const [addfield, setAddfield] = useState([initfield]);
  console.log("statefff", addfield);

  //new field value

  const newhandlechange = (e, i) => {
    const { name, value } = e.target;
    let newArr = [...addfield];
    newArr[i][name] = value;
    setAddfield(newArr);
    // console.log("namevalue", name, value, i, newArr[i][name]);
  };

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
      console.log("arrr", arr);

      if (arr?.findIndex((ele) => ele === value) === -1) {
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

      // case "red":
      //   errMsg.red = state.red === "" ? "Required Field" : "";
      //   break;
      default:
        console.log("The error");
        break;
    }
  };

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
    if (state.red === "") {
      errMsg.red = "Required Field";
      //   setFieldcheck({ price: false });
    }
    if (state.check.length === 0) {
      errMsg.check = "Required Field";
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

  // console.log("field valid", fieldcheck);

  const extrafield = () => {
    setAddfield([...addfield, initfield]);
    // addfield.push(initfield)
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("sdsf", Object.keys(validate()).length);

    if (Object.keys(validate()).length !== 0) {
      return;
    }

    console.log("addfieldsss", addfield);
    const totalprice = addfield.reduce(function (pre, post) {
      return Number(pre) + Number(post.total);
    }, 0);

    console.log("totalprice", totalprice);

    dispatch(userform({ ...state, totalprice: totalprice }));
    navigate("/details");
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
            <label for="option">Country:</label>
            <select
              id="option"
              value={state.category}
              name="category"
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="Srilanka">Srilanka</option>
              <option value="Pakistan">Pakistan</option>
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
              <option value="kolkata">KOlkata</option>
              <option value="chennai">Chennai</option>
              <option value="banglore">Banglore</option>
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

          <p style={{ color: "red" }}>{state.errors.red}</p>
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

          <p style={{ color: "red" }}>{state.errors.check}</p>

          {/* new field added           */}
          <div className="form-container">
            <button
              type="button"
              onClick={() => {
                extrafield();
              }}
            >
              add{" "}
            </button>
            <table>
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Product</th>
                  <th>Price </th>
                  <th>Tax (%)</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {addfield.map((post, i) => (
                  <tr key={i}>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          setAddfield(addfield.filter((a, ind) => ind != i));
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="nweprodutct"
                        onChange={(e) => newhandlechange(e, i)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="newprice"
                        onChange={(e) => newhandlechange(e, i)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="tax"
                        onChange={(e) => newhandlechange(e, i)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="total"
                        onChange={(e) => newhandlechange(e, i)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="form-group submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {/* <div className="form-container">
        <button
          onClick={() => {
            extrafield();
          }}
        >
          add{" "}
        </button>
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Product</th>
              <th>Price </th>
              <th>Tax (%)</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {addfield.map((post, i) => (
              <tr key={i}>
                <td>
                  <button
                    onClick={() => {
                      setAddfield(addfield.filter((a, ind) => ind != i));
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <input
                    type="text"
                    name="nweprodutct"
                    onChange={(e) => newhandlechange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="newprice"
                    onChange={(e) => newhandlechange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tax"
                    onChange={(e) => newhandlechange(e, i)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="total"
                    onChange={(e) => newhandlechange(e, i)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Booking;
