import React, { useState } from "react";
import "./Customer.css";
const Customers = () => {
  let [row, setRow] = useState(3);
  let custs = [];
  for (let i = 0; i <= row; i++) {
    custs.push({
      firstName: `first${i}`,
      lastName: `last${i}`,
      email: `abc${i}@gmail.com`,
      address: `000${i} street city, ST`,
      zipcode: `0000${i}`,
    });
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h3>Customers</h3>
        <a href="#d" className="btn btn-warning mb-3">
          Export
        </a>
      </div>

      <table className="table table-striped">
        <thead className="bgvi">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {custs.map((single, index) => {
            const changeFirstName = (e) => {
              console.log((custs[index].firstName = e.target.value));
            };
            const changeLastName = (e) => {
              console.log((custs[index].lastName = e.target.value));
            };
            const changeEmail = (e) => {
              console.log((custs[index].email = e.target.value));
            };
            const changeAddress = (e) => {
              console.log((custs[index].address = e.target.value));
            };
            const chagneZipCode = (e) => {
              console.log((custs[index].zipcode = e.target.value));
            };
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    onChange={changeFirstName}
                    defaultValue={single.firstName}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeLastName}
                    defaultValue={single.lastName}
                  />
                </td>
                <td>
                  <input type="text" onChange={changeEmail} defaultValue={single.email} />
                </td>
                <td>
                  <input type="text" onChange={changeAddress} defaultValue={single.address} />
                </td>
                <td>
                  <input type="text" onChange={chagneZipCode} defaultValue={single.zipcode} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="d-block mx-auto btn btn-success"
        onClick={() => setRow(row++)}
      >
        +
      </button>
    </div>
  );
};

export default Customers;
