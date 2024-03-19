import React, { useState } from "react";
import Form1 from "./Form1";
import { useNavigate } from "react-router-dom";
import Form3 from "./Form3";
import Form2 from "./Form2";
import Button from "react-bootstrap/Button";

const Parentform = () => {

  const navigate=useNavigate()
  const [page, setPage] = useState(0);

  const [formdata, setFormdata] = useState({
    colgname: "",
    degree: "",
    univ: "",
    compname: "",
    pos: "",
    exp: "",
    fname: "",
    lname: "",
    errors:{
      colgname: "",
    degree: "",
    univ: "",
    compname: "",
    pos: "",
    exp: "",
    fname: "",
    lname: "",
    }
  });

  const [errdata, setErrdata] = useState({
    // colgname: "",
    // degree: "",
    // univ: "",
    // compname: "",
    // pos: "",
    // exp: "",
    // fname: "",
    // lname: "",
  });

  const validate = () => {
    let errMsg = {};

    if (formdata.colgname === "") {
      errMsg.colgname = "Required field";
    }
    if (formdata.degree === "") {
      errMsg.degree = "Required field";
    }
    if (formdata.colgname === "") {
      errMsg.univ = "Required field";
    }
    // if (formdata.compname === "") {
    //   errMsg.compname = "Required field";
    // }
    // if (formdata.pos === "") {
    //   errMsg.pos = "Required field";
    // }
    // if (formdata.exp=== "") {
    //   errMsg.exp = "Required field";
    // }
    // if (formdata.fname === "") {
    //   errMsg.fname= "Required field";
    // }
    // if (formdata.lname === "") {
    //   errMsg.lname = "Required field";
    // }

    // setErrdata(errMsg);
    setFormdata((prev)=>({...prev,errors:errMsg}))

    return errMsg;
  };

  const validate2=()=>{
    let errMsg = {};
    if (formdata.compname === "") {
      errMsg.compname = "Required field";
    }
    if (formdata.pos === "") {
      errMsg.pos = "Required field";
    }
    if (formdata.exp=== "") {
      errMsg.exp = "Required field";
    }

    setFormdata((prev)=>({...prev,errors:errMsg}))

    return errMsg;
  }

  const validate3=()=>{
    let errMsg = {};
    if (formdata.fname === "") {
        errMsg.fname= "Required field";
      }
      if (formdata.lname === "") {
        errMsg.lname = "Required field";
      }

    setFormdata((prev)=>({...prev,errors:errMsg}))

    return errMsg;
  }

  console.log("TheFormdata", formdata);
  // console.log("TheError", formdata.errors);

  const displayForm = () => {
    if (page === 0) {
      return <Form1 formdata={formdata} setFormdata={setFormdata} />;
    } else if (page === 1) {
      return <Form2 formdata={formdata} setFormdata={setFormdata} />;
    } else if (page === 2) {
      return <Form3 formdata={formdata} setFormdata={setFormdata} />;
    }
  };

  return (
    <div>
      <div className="header">{page}</div>
      <div className="form-body">{displayForm()}</div>

      <div className="footer">
        {page === 0 ? (
          ""
        ) : (
          <Button
            variant="success"
            onClick={(event) => {
              setPage((pre) => pre - 1);
            }}
          >
            Previous
          </Button>
        )}

        {page === 2 ? (
          <Button
            variant="primary"
            onClick={(event) => {

              if (Object.keys(validate3()).length !==0) {
                return;
              }
              
              navigate("/formdetails",{state:formdata})
              alert("The form submitted succesfully");
              console.log("formdata", formdata);
            }}
          >
            Submit
          </Button>
        ) : (
          <Button
            variant="warning"
            onClick={(event) => {
              if (page === 0) {
                if (Object.keys(validate()).length !==0) {
                  return;
                }
                setPage((pre) => pre + 1);
              } else if (page === 1) {
                if (Object.keys(validate2()).length !== 0) {
                  return;
                }
                setPage((pre) => pre + 1);
              }
            }}
          >
            {" "}
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Parentform;
