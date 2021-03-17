import React from "react";
import EmployeeCard from "../EmployeeCard";
// import "./style.css";

const EmployeeTable = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Location</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <EmployeeCard />
      </tbody>
    </table>
  );
};

export default EmployeeTable;
