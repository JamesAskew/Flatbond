import React, { Fragment } from "react";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormFeedback
} from "reactstrap";

const FlatbondForm = props => {
  const validateRent = (rent, rentFrequency) => {
    const intRent = Number(rent);
    let validationState = "has-success";
    let rent_frequency =
      rentFrequency !== undefined ? rentFrequency : props.rentFrequency;

    // validate rent is a numbers
    if (isNaN(intRent)) {
      validationState = "has-danger";
      props.onValidationChange("rent", validationState);
      return;
    }
    console.log(rent_frequency);
    console.log(intRent);
    // validate Minimum and Maximum rent amounts
    if (rent_frequency === "Weekly") {
      console.log("in weekly");
      if (intRent < 25) {
        validationState = "has-danger";
        props.onValidationChange(
          "rent_error",
          "Minimum rent amount is £25 per week"
        );
      }
      if (intRent > 2000) {
        validationState = "has-danger";
        props.onValidationChange(
          "rent_error",
          "Maximum rent amount is £2000 per week"
        );
      }
    }
    if (rent_frequency === "Monthly") {
      if (intRent < 110) {
        validationState = "has-danger";
        props.onValidationChange(
          "rent_error",
          "Minimum rent amount is £110 per month"
        );
      }
      if (intRent > 8660) {
        validationState = "has-danger";
        props.onValidationChange(
          "rent_error",
          "Maximum rent amount is £8660 per month"
        );
      }
    }

    // validate rent is greater than 0
    if (intRent <= 0) {
      validationState = "has-danger";
    }

    props.onValidationChange("rent", validationState);
  };

  const validateRentFrequency = e => {
    validateRent(props.rent, e.target.value);
    props.onValidationChange("rent_frequency", e.target.value);
  };

  const validatePostcode = e => {
    const poscodeRex = /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/;
    let validationState;
    if (poscodeRex.test(e.target.value)) {
      validationState = "has-success";
    } else {
      validationState = "has-danger";
    }
    props.onValidationChange("postcode", validationState);
  };
  const validateAndSubmitForm = e => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <Fragment>
      <Form className="form" onSubmit={e => validateAndSubmitForm(e)}>
        <h2 className="form-title">Create a Flatbond</h2>
        <Row>
          <Col sm="12" md={{ size: 3, offset: 3 }}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>£</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Rent"
                  type="number"
                  name="rent"
                  valid={props.validRent === "has-success"}
                  invalid={props.validRent === "has-danger"}
                  onChange={e => {
                    props.onChange([e.target.name], e.target.value);
                    validateRent(e.target.value);
                  }}
                />
                <FormFeedback>{props.rent_error}</FormFeedback>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm="12" md={{ size: 3 }}>
            <FormGroup tag="fieldset" className="form-checklist">
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="rent_frequency"
                  id="rent_frequency_monthly"
                  value="Monthly"
                  valid={props.rentFrequency !== ""}
                  onChange={e => {
                    validateRentFrequency(e);
                    props.onChange([e.target.name], e.target.value);
                  }}
                />
                <Label for="rent_frequency_monthly" check>
                  Monthly
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Input
                  type="radio"
                  name="rent_frequency"
                  id="rent_frequency_weekly"
                  value="Weekly"
                  valid={props.rentFrequency !== ""}
                  onChange={e => {
                    validateRentFrequency(e);
                    props.onChange([e.target.name], e.target.value);
                  }}
                />
                <Label for="rent_frequency_weekly" check>
                  Weekly
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Input
                type="text"
                name="postcode"
                id="postcode"
                placeholder="Postcode"
                valid={props.validPostcode === "has-success"}
                invalid={props.validPostcode === "has-danger"}
                onChange={e => {
                  validatePostcode(e);
                  props.onChange([e.target.name], e.target.value);
                }}
              />
            </FormGroup>
            <Button
              disabled={!props.isFormValid}
              className="btn btn-primary btn-block"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default FlatbondForm;
