import React from "react";
import { useLocation } from "react-router-dom";

// import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";




const BookingDetails = () => {
  const location = useLocation();
  // const products = location.state;
  // console.log("thelooka", products);

const {formdata}=useSelector((state) => state.curd)

console.log("The redux form data",formdata);
  const ExpandedComponent = ({ producdatats }) => (
    <pre>{JSON.stringify(products, null, 2)}</pre>
  );

  const columns = [
    {
      name: "Country",
      selector: (row) => row.category,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "Product Name",
      selector: (row) => row.pname,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Gender",
      selector: (row) => row.red,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={formdata}
        
        // expandableRows
        // expandableRowsComponent={ExpandedComponent}
      />

      {/* {
        <table>
          <thead>
            <td>Category</td>
            <td>City</td>
            <td>Product Name</td>
            <td>Price</td>
            <td>Gender</td>
          </thead>
          <tbody>
            {products.map((post) => (
              <tr>
                <td>{post.category}</td>
                <td>{post.city}</td>
                <td>Product Name</td>
                <td>Price</td>
                <td>Gender</td>
              </tr>
            ))}
          </tbody>
        </table>
      } */}
    </div>
  );
};

export default BookingDetails;
