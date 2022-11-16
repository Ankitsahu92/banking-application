import React from "react";
import Card from "../../../common/Card";

type Props = {};

const CreateAccount = (props: Props) => {
  return (
    <Card height="99%">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Create Account Form</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <input
              style={{ width: "300px" }}
              type="text"
              className="form-control"
              placeholder="Enter Initial Deposit"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">Select Type Of Account</div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-check" style={{ width: "300px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp; Savings Account
              </label>
            </div>
            <div className="form-check" style={{ width: "300px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                &nbsp; Current Account
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CreateAccount;
