import React, { Component } from "react";
import { Container } from "reactstrap";

import "./App.css";
import FlatbondForm from "./components/FlatbondForm";
import FlatbondDetails from "./components/FlatbondDetails";
class App extends Component {
  render() {
    return (
      <Container className="App">
        <FlatbondForm />
        <FlatbondDetails
          rent="1200"
          rentFrequency="Monthly"
          membershipFee="360"
          postcode="HP5 1QD"
        />
      </Container>
    );
  }
}

export default App;
