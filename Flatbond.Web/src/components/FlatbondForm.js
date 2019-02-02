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
  InputGroupText
} from "reactstrap";

const FlatbondForm = props => {
  const validateRent = e => {
    const intRent = Number(e.target.value);
    let validationState;

    if (isNaN(intRent)) {
      validationState = "has-danger";
      props.onValidationChange("rent", validationState);
      return;
    }

    if (intRent <= 0) {
      validationState = "has-danger";
    } else {
      validationState = "has-success";
    }
    props.onValidationChange("rent", validationState);
  };

  const validateRentFrequency = () => {
    props.onValidationChange("rent_frequency", "has-success");
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

    if (props.rentFrequency !== "") {
      props.onClick();
    }
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
                    props.onChange(e);
                    validateRent(e);
                  }}
                />
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
                  valid={props.rentFrequency === "has-success"}
                  onChange={e => {
                    validateRentFrequency();
                    props.onChange(e);
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
                  valid={props.rentFrequency === "has-success"}
                  onChange={e => {
                    validateRentFrequency();
                    props.onChange(e);
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
                  props.onChange(e);
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
