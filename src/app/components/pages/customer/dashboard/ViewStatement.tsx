import React from "react";
import Card from "../../../common/Card";
import MyTable from "../../../common/MyTable";

type Props = {};

const ViewStatement = (props: Props) => {
  return (
    <Card height="99%">
      <div className="row">
        <div className="col-6">
          <select placeholder="Select Your Account No">
            <option value="1">1</option>
          </select>
        </div>
        <div className="col-6">
          <button type="button">Show</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">AC NO :</div>
        <div className="col-6">Balance: </div>
      </div>
      <div className="row">
        <div className="col-12">
          <MyTable></MyTable>
        </div>
      </div>
    </Card>
  );
};

export default ViewStatement;
