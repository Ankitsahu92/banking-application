import React, { ChangeEvent } from "react";
import { AccountType } from "../../../../global.types";
import Card from "../../../common/Card";

// type Props = {
//   formData?: AccountType | null | undefined;
// };

const CreateAccount = ({
  formData,
  setFormData,
  onSubmitClicked,
}: {
  formData: AccountType;
  setFormData: (value: React.SetStateAction<AccountType>) => void;
  onSubmitClicked: any;
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
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
                name="initialDeposit"
                className="form-control"
                defaultValue={formData?.initialDeposit}
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
                  defaultChecked={formData?.typeOfAccount === "SB"}
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
                  defaultChecked={formData?.typeOfAccount === "CA"}
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
