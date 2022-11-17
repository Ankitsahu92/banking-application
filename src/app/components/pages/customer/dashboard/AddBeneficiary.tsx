import React, { ChangeEvent } from "react";
import { DashboardType } from "../../../../global.types";
import Card from "../../../common/Card";

const AddBeneficiary = ({
  formData,
  setFormData,
  onSubmitClicked,
}: {
  formData: DashboardType;
  setFormData: (value: React.SetStateAction<DashboardType>) => void;
  onSubmitClicked: any;
}) => {
  const { beneficiary } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      const beneficiary = {
        ...prev.beneficiary,
        [e.target.name]: e.target.value,
      };
      return { ...prev, beneficiary: beneficiary };
    });
  };

  return (
    <Card height="99%">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Add Beneficiary</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              style={{ width: "300px" }}
              type="text"
              className="form-control"
              placeholder="Enter Account Number"
              onChange={onChange}
              defaultValue={beneficiary?.accountNumber}
              name="accountNumber"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              style={{ width: "300px" }}
              type="text"
              className="form-control"
              placeholder="Confirm Account Number"
              onChange={onChange}
              defaultValue={beneficiary?.confirmAccountNumber}
              name="confirmAccountNumber"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <input
              style={{ width: "300px" }}
              type="text"
              className="form-control"
              placeholder="Acount Holder Name"
              onChange={onChange}
              defaultValue={beneficiary?.acountHolderName}
              name="acountHolderName"
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
                defaultChecked={beneficiary?.typeOfAccount === "SB"}
                className="form-check-input"
                type="radio"
                onChange={onChange}
                name="typeOfAccount"
                id="SB"
                value="SB"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                &nbsp; Savings Account
              </label>
            </div>
            <div className="form-check" style={{ width: "300px" }}>
              <input
                defaultChecked={beneficiary?.typeOfAccount === "CA"}
                className="form-check-input"
                type="radio"
                onChange={onChange}
                name="typeOfAccount"
                id="CA"
                value="CA"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
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
    </Card>
  );
};

export default AddBeneficiary;
