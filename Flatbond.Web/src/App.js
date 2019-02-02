import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import FlatbondForm from "./components/FlatbondForm";
import FlatbondDetails from "./components/FlatbondDetails";

import { getConfig, postFlatbond } from "./api/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      configLoaded: false,
      flatbondPosted: false,
      form: {},
      validate: {}
    };
  }

  componentDidMount() {
    this.getConfigAndSetup();
  }

  getConfigAndSetup = () => {
    getConfig().then(response => {
      this.setState({
        configLoaded: true,
        client_id: response.data.client_Id,
        fixed_membership_fee: response.data.fixed_Membership_Fee,
        fixed_membership_fee_amount: response.data.fixed_Membership_Fee_Amount
      });
    });
  };

  buildFlatbondDto = () => {
    return {
      ClientConfig: {
        Client_Id: this.state.client_id,
        Fixed_Membership_Fee: this.state.fixed_membership_fee,
        Fixed_Membership_Fee_Amount: this.state.fixed_membership_fee_amount
      },
      rent: this.state.form.rent * 100,
      rent_frequency: this.state.form.rent_frequency,
      postcode: this.state.form.postcode
    };
  };

  postFlatbondHandler = () => {
    const flatbondDto = this.buildFlatbondDto();

    postFlatbond(flatbondDto).then(response => {
      this.setState({
        membershipFee: response.data.membership_Fee / 100,
        flatbondPosted: true
      });
    });
  };

  inputChangeHandler = e => {
    let form = this.state.form;
    form[e.target.name] = e.target.value;

    this.setState({ form: form });
  };

  validationChangeHandler = (name, value) => {
    let validate = this.state.validate;
    validate[name] = value;

    this.setState({ validate: validate });
    this.isFormValidHandler();
  };

  resetClickHandler = () => {
    this.setState({
      configLoaded: false,
      flatbondPosted: false,
      form: {},
      validate: {}
    });

    this.getConfigAndSetup();
  };

  isFormValidHandler = () => {
    let validationState = this.state.validate;
    if (
      validationState.rent === "has-success" &&
      validationState.rent_frequency === "has-success" &&
      validationState.postcode === "has-success"
    ) {
      validationState.form = true;
    } else {
      validationState.form = false;
    }

    this.setState({ validate: validationState });
  };

  render() {
    const configLoaded = this.state.configLoaded;
    const flatbondPosted = this.state.flatbondPosted;

    return (
      <Container className="App">
        {!configLoaded && <p>Fetching configuration... </p>}

        {configLoaded && !flatbondPosted && (
          <FlatbondForm
            onChange={this.inputChangeHandler}
            onClick={() => this.postFlatbondHandler()}
            onValidationChange={this.validationChangeHandler}
            validPostcode={this.state.validate.postcode}
            validRent={this.state.validate.rent}
            rentFrequency={this.state.validate.rent_frequency}
            isFormValid={this.state.validate.form}
          />
        )}

        {flatbondPosted && (
          <FlatbondDetails
            rent={this.state.form.rent}
            rentFrequency={this.state.form.rent_frequency}
            membershipFee={this.state.membershipFee}
            postcode={this.state.form.postcode}
            onResetClick={this.resetClickHandler}
          />
        )}
      </Container>
    );
  }
}

export default App;
