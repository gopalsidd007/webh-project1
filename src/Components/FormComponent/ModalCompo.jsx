import React, { useState } from "react";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modaldata from "./Modaldata";

const ModalCompo = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [modalopen, setModlopen] = useState(false);

  const [modaldata, setModaldata] = useState({});

  const [toggle, setToggle] = useState(false);

  const Openmodal = () => {
    setModlopen(true);
  };

  const Closemodal = () => {
    setModlopen(false);
  };

  const handlechange = (event) => {
    let { name, value } = event.target;
    setModaldata({ ...modaldata, [name]: value });
  };
  const handlesubmt = (event) => {
    event.preventDefault();
    console.log("Themodaldata", modaldata);
    Closemodal();
    
  };
  //   console.log("the formdata", modaldata);
  return (
    <div>
      <Button variant="primary" onClick={Openmodal}>
        Open modal
      </Button>

      <Modal
        isOpen={modalopen}
        style={customStyles}
        contentLabel="Example of Modal"
        onRequestClose={Closemodal}
      >
        <h1>Modal heading</h1>

        <form onSubmit={handlesubmt}>
          <label htmlFor="">User Name</label>
          <input type="text" name="usname" onChange={handlechange} />
          <br />
          <label htmlFor="">User Age</label>
          <input type="number" name="age" onChange={handlechange} />
          <br />
          <label htmlFor="">User City</label>
          <input type="text" name="city" onChange={handlechange} />
          <br />
          <label htmlFor="">User Profession</label>
          <input type="text" name="prof" onChange={handlechange} />
          <br />
        </form>

        <Button variant="secondary" onClick={Closemodal}>
          Close
        </Button>
        <Button variant="primary" onClick={handlesubmt}>
          Save{" "}
        </Button>
      </Modal>

      {/* <h1>{modaldata}</h1> */}

      <Modaldata modaldata={modaldata} />
    </div>
  );
};

export default ModalCompo;
