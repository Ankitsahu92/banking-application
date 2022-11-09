import React from "react";
import { Link } from "react-router-dom";
import Card from "../common/Card";

type Props = {};

const UpdatePassword = (props: Props) => {
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
          <label htmlFor="Password">Password</label>
          <input
            required
            placeholder="Password"
            type="Password"
            className="form-control"
            id="Password"
          />
        </div>

        <div className="col col-8 form-group">
          <label htmlFor="ConfirmPassword">ConfirmPassword</label>
          <input
            required
            placeholder="Confirm Password"
            type="Password"
            className="form-control"
            id="ConfirmPassword"
          />
        </div>

        <button type="submit">Update</button>
        <br />
        {/* <div className="col col-8 centerAlignText">
          Already Have An Customer Account &nbsp;
          <Link to="/login">Login Here</Link>
        </div> */}
      </Card>
    </div>
  );
};

export default UpdatePassword;
