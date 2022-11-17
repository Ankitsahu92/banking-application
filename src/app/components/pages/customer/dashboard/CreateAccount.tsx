import React, { ChangeEvent } from "react";
import { DashboardType } from "../../../../global.types";
import Card from "../../../common/Card";

const CreateAccount = ({
  formData,
  setFormData,
  onSubmitClicked,
}: {
  formData: DashboardType;
  setFormData: (value: React.SetStateAction<DashboardType>) => void;
  onSubmitClicked: any;
}) => {
  const account = formData.account;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      const account = { ...prev.account, [e.target.name]: e.target.value };
      return { ...prev, account: account };
    });
  };

  return (
    <Card height="99%">
      <form autoComplete="off">
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
                onChange={onChange}
                defaultValue={account?.initialDeposit}
                name="initialDeposit"
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
                  defaultChecked={account?.typeOfAccount === "SB"}
                  className="form-check-input"
                  type="radio"
                  onChange={onChange}
                  name="typeOfAccount"
                  id="SB"
                  value="SB"
                />
                <label className="form-check-label" htmlFor="SB">
                  &nbsp; Savings Account
                </label>
              </div>
              <div className="form-check" style={{ width: "300px" }}>
                <input
                  defaultChecked={account?.typeOfAccount === "CA"}
                  className="form-check-input"
                  type="radio"
                  onChange={onChange}
                  name="typeOfAccount"
                  id="CA"
                  value="CA"
                />
                <label className="form-check-label" htmlFor="CA">
                  &nbsp; Current Account
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                onClick={() => {
                  onSubmitClicked();
                }}
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default CreateAccount;
