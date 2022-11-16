import React from "react";
import Card from "../../../common/Card";

type Props = {};

const RemoveBeneficiary = (props: Props) => {
  return (
    <Card height="99%">
      <table className="">
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
    </Card>
  );
};

export default RemoveBeneficiary;
