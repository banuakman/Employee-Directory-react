import React, { Component } from "react";
// import "./style.css";

class EmployeeCard extends Component {
  render() {
    return (
      <tr>
        <th scope="row">picture</th>
        <td>Daenerys</td>
        <td>Targaryen</td>
        <td>mail@mail.com</td>
        <td>Pentos</td>
        <td>01-01-1900</td>
      </tr>
    );
  }
}

export default EmployeeCard;
