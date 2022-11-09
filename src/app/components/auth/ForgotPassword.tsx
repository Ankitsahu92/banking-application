import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";
type Props = {};
const ForgotPassword = (props: Props) => {
  return (
    <div className="customerRegistration">
      <Card className="centerAlignItems">
        <div className="col col-8 form-group">
          <label htmlFor="UserName">User Name</label>
          <input
            required
            name="UserName"
            type="text"
            className="form-control"
            id="UserName"
            placeholder="Enter User Name"
          />
        </div>
        <div className="col col-8 form-group">
          <label htmlFor="UserName">Favourite Actor</label>
          <select className="form-control">
            <option>Who is your Favourite actor</option>
          </select>
        </div>
        <div className="col col-8 form-group">
          <label htmlFor="UserName">Enter Your Answer</label>
          <input
            required
            name="EnterYourAnswer"
            type="text"
            className="form-control"
            id="EnterYourAnswer"
            placeholder="Enter Your Answer"
          />
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
};

export default ForgotPassword;
