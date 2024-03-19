import React from 'react'
import { useLocation } from 'react-router-dom'
import DataTable from "react-data-table-component";
import Table from 'react-bootstrap/Table';

const Formdetails = () => {

 const location=useLocation();
 const formdetails=location?.state;
 

// const {formdetails}=location.state
console.log("The location data",formdetails)

const formName=Object.keys(formdetails)
console.log("formName",formName)

const formValue=Object.values(formdetails)
console.log("formValue",formValue)

const entries=Object.entries(formdetails)
console.log("formValue",entries)



//  const columns = [
//     {
//       name: "College name",
//       selector: (row) => row.colgname,
//     },
//     {
//       name: "Company",
//       selector: (row) => row.compname,
//     },
//     {
//       name: "Degree",
//       selector: (row) => row.degree,
//     },
//     {
//       name: "Experiance",
//       selector: (row) => row.exp,
//     },
//     {
//       name: "Position",
//       selector: (row) => row.pos,
//     },
//     {
//       name: "University",
//       selector: (row) => row.univ ,
//     },
    
//   ];

//   const data = [
//     {
//       id: 1,
//       title: "Beetlejuice",
//       year: "1988",
//     },
//     {
//       id: 2,
//       title: "Ghostbusters",
//       year: "1984",
//     },
//   ];



  return (
    <div>
        <h1>The Form details</h1>

        

        {/* <DataTable
        columns={columns}
        data={data}

        // expandableRows
        // expandableRowsComponent={ExpandedComponent}
      /> */}

<Table striped bordered hover>
      <thead>
        <tr>
        <th>First Name</th>
          <th>Last Name</th>
          <th>Degree</th>
          <th>University</th>
          <th>College</th>
          <th>Company</th>
          <th>Position</th>
          <th>Experiance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{formdetails.fname}</td>
          <td>{formdetails.lname}</td>
          <td>{formdetails.degree}</td>
          <td>{formdetails.univ}</td>
          <td>{formdetails.colgname}</td>
          <td>{formdetails.compname}</td>
          <td>{formdetails.pos}</td>
          <td>{formdetails.exp}</td>
          
          
        </tr>
       
        
      </tbody>
    </Table> 
    
    </div>
  )
}

export default Formdetails