import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";

const FlatbondDetails = props => {
  return (
    <Fragment>
      <Row>
        <Col sm={{ size: 2, offset: 4 }}>Rent Amount:</Col>
        <Col sm="2">£{props.rent}</Col>
      </Row>
      <Row>
        <Col sm={{ size: 2, offset: 4 }}>Rent Frequency:</Col>
        <Col sm="2">{props.rentFrequency}</Col>
      </Row>
      <Row>
        <Col sm={{ size: 2, offset: 4 }}>Membership Fee:</Col>
        <Col sm="2">£{props.membershipFee}</Col>
      </Row>
      <Row>
        <Col sm={{ size: 2, offset: 4 }}>Postcode:</Col>
        <Col sm="2">{props.postcode}</Col>
      </Row>
    </Fragment>
  );
};

export default FlatbondDetails;
