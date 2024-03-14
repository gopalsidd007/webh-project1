import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  fieldinput,
  increment,
  postname,
} from "../Redux/Slice/CrudSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { fname, location, count } = useSelector((state) => state.curd);
  const navigate = useNavigate();
  const [state, setState] = useState("");

  console.log("the inpue", state);

  let handlechange = (event) => {
    // let { name, value } = event.target;
    // console.log("input", name, value);
    // setState({ ...state, [name]: value });
    setState(event.target.value);
  };
  console.log();
  // dispatch(postname())
  return (
    <div>
      <h1>Name:{fname}</h1>
      <button
        onClick={() => {
          dispatch(postname());
        }}
      >
        Name Change
      </button>

      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <h2>Enter Your Name</h2>
      <form>
        <input type="text" name="username" onChange={handlechange}></input>
      </form>
      <button
        onClick={() => {
          navigate("/about");
          dispatch(fieldinput(state));
        }}
      >
        Watch
      </button>
    </div>
  );
};

export default Home;
