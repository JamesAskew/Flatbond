import React from "react";
import { Col, Row } from "reactstrap";

const FlatbondDetails = props => {
  return (
    <div className="form">
      <h2 className="form-title">Flatbond Details</h2>
      <Row>
        <Col className="results-label" sm={{ size: 2, offset: 4 }}>
          Rent Amount:
        </Col>
        <Col className="results-label" sm="2">
          £{props.rent}
        </Col>
      </Row>
      <Row>
        <Col className="results-label" sm={{ size: 2, offset: 4 }}>
          Rent Frequency:
        </Col>
        <Col className="results-label" sm="2">
          {props.rentFrequency}
        </Col>
      </Row>
      <Row>
        <Col className="results-label" sm={{ size: 2, offset: 4 }}>
          Membership Fee:
        </Col>
        <Col className="results-label" sm="2">
          £{props.membershipFee}
        </Col>
      </Row>
      <Row>
        <Col className="results-label" sm={{ size: 2, offset: 4 }}>
          Postcode:
        </Col>
        <Col className="results-label" sm="2">
          {props.postcode}
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 12 }}>
          <button onClick={props.onResetClick} className="btnLink">
            Create another Flatbond
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default FlatbondDetails;
