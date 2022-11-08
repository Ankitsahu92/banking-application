import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

type Props = {};

type State = {};

class ForgotPassword extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="customerRegistration">
        <Card className="centerAlignItems">
          <div className="col col-8">
            <input placeholder="Enter User Name" />
          </div>
          <div className="col col-8">
            <select>
              <option>Who is your Favourite actor</option>
            </select>
          </div>
          <div className="col col-8">
            <input placeholder="Enter Your Answer" />
          </div>

          <button type="submit">Get Details</button>
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

export default ForgotPassword;
