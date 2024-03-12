import React, { useState } from 'react'
import './Booking.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()

  const [state, setState] = useState({
    email: "", pwd: "",
    errors: { email: "", pwd: "" }
  })

  const handleChange = (event) => {
    let { name, value } = event.target;

    let errMsg = state.errors;

    switch (name) {
      case "email": errMsg.email = value.length === 0 ? "Required Field" : ""
        break;
      case "pwd": errMsg.pwd = value.length === 0 ? "Required Field" : ""
        break;

      default: console.log("The error");
        break;
    }

    setState({ ...state, [name]: value, errors: errMsg })
  }
  const submitHandle = (event) => {
    event.preventDefault();
    console.log("The Email value is", state);
    navigate("/booking")
  }
  return (
    <div>


      <div class="form-container">
        <h2>Login Form</h2>
        <form onSubmit={submitHandle}>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required onChange={handleChange} />
          </div>
          {
            state.errors.email.length > 0 ? <p style={{ color: 'red' }}>{state.errors.email}</p> : null
          }
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="pwd" required onChange={handleChange} />
          </div>
          {
            state.errors.pwd.length > 0 ? <p style={{ color: 'red' }}>{state.errors.pwd}</p> : null
          }

          <div class="form-group submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login