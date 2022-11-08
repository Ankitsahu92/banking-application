import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../../common/Card";

type Props = {};

type State = {};

class CustomerRegistration extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="customerRegistration">
        <Card className="centerAlignItems">
          <div className="col col-8">
            <input placeholder="User Name" />
          </div>
          <div className="col col-8">
            <input placeholder="Full Name" />
          </div>
          <div className="col col-8">
            <input placeholder="Password" type="Password" />
          </div>
          <div className="col col-8">
            <input placeholder="Confirm Password" type="Password" />
          </div>
          <button type="submit">Register</button>
          <br />
          <div className="col col-8 centerAlignText">
            Already Have An Customer Account &nbsp;
            <Link to="/login">Login Here</Link>
          </div>
        </Card>
      </div>
    );
  }
}

export default CustomerRegistration;
