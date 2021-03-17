import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import getPeople from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    this.getAllPeople();
  }
  getAllPeople = () => {
    getPeople().then((data) =>
      this.setState({
        persons: data.results,
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title />
          <EmployeeTable />
        </Wrapper>
      </div>
    );
  }
}
export default App;
