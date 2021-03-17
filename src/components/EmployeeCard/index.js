import React from "react";
// import "./style.css";

const EmployeeCard = ({ id, picture, first, last, email, location, dob }) => {
  return (
    <tr key={id}>
      <th scope="row">
        <img src={picture} alt="employee" />
      </th>
      <td>{first}</td>
      <td>{last}</td>
      <td>{email}</td>
      <td>{location}</td>
      <td>{dob}</td>
    </tr>
  );
};

export default EmployeeCard;
