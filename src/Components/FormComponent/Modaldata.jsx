import React from 'react'
import Table from 'react-bootstrap/Table';

const Modaldata = ({modaldata}) => {
    console.log("modaldata",modaldata)
  return (
    <div>
        <h1>Modaldata</h1>

        <Table striped bordered hover>
      <thead>
        <tr>
        <th>First Name</th>
          <th>Last Name</th>
          <th>Degree</th>
          <th>University</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{modaldata.usname}</td>
          <td>{modaldata.age}</td>
          <td>{modaldata.city}</td>
          <td>{modaldata.prof}</td>
        </tr>   
        
      </tbody>
    </Table> 
    </div>
  )
}

export default Modaldata