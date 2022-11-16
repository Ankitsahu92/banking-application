import React from "react";
import Card from "../../../common/Card";

type Props = {};

const TransferMoney = (props: Props) => {
  return (
    <Card height="99%">
      Select Source Account
      <table style={{ height: "200px" }}>
        <thead>
          <tr>
            <th>Account No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="col-sm-12">
          <select placeholder="Select A/C">
            <option value="1">1</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Amount"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Reason"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <button type="button">Tranfer</button>
        </div>
      </div>
    </Card>
  );
};

export default TransferMoney;
