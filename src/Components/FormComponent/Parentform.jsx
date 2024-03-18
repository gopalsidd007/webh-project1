import React, { useState } from "react";
import Form1 from "./Form1";
import { useNavigate } from "react-router-dom";
import Form3 from "./Form3";
import Form2 from "./Form2";

const Parentform = () => {
  const [form2state, setForm2state] = useState(false);
  const [form3state, setForm3state] = useState(false);
  let navigate = useNavigate();
  console.log("form2state",form2state);

  return (
    <div>
      <h1>Parent Form</h1>

      <Form1 setForm2state={setForm2state}/>
      {form2state && <Form2 />}
      {form3state && <Form3 />}
    </div>
  );
};

export default Parentform;
