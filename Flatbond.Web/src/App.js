import React, { Component } from "react";
import { Container } from "reactstrap";

import "./App.css";
import FlatbondForm from "./components/FlatbondForm";
class App extends Component {
  render() {
    return (
      <Container className="App">
        <FlatbondForm />
          <img src={logo} className="App-logo" alt="logo" />
      </Container>
    );
  }
}

export default App;
