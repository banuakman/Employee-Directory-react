import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Header";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeCard from "./components/EmployeeCard";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    this.getPeople();
  }
  getPeople = async () => {
    const { data } = await API.data();
    this.setState({ persons: data.results });
  };

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title />
          <EmployeeTable>
            {this.state.persons.map((person, index) => {
              return (
                <EmployeeCard
                  id={index}
                  picture={person.picture.medium}
                  first={person.name.first}
                  last={person.name.last}
                  email={person.email}
                  location={person.location.country}
                  dob={person.dob.date}
                />
              );
            })}
          </EmployeeTable>
        </Wrapper>
      </div>
    );
  }
}
export default App;
