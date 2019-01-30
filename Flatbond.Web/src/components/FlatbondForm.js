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

const FlatbondForm = () => {
  return (
    <Fragment>
      <Form className="form">
        <Row>
          <Col sm="12" md={{ size: 3, offset: 3 }}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>£</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Rent" type="number" name="rent" />
              </InputGroup>
            </FormGroup>
          </Col>
          <Col sm="12" md={{ size: 3 }}>
            <FormGroup tag="fieldset">
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="rdoMonthly" /> Monthly
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="radio" name="rdoWeekly" /> Weekly
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
              />
            </FormGroup>
            <Button>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default FlatbondForm;
