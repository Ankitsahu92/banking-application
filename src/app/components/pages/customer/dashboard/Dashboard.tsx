import React, { useState } from "react";
import Card from "../../../common/Card";
// import img from "../../../../assets/images/bank-svgrepo-com.svg";
// import { Link } from "react-router-dom";
import AccountList from "./AccountList";
import AddBeneficiary from "./AddBeneficiary";
import CreateAccount from "./CreateAccount";
import RemoveBeneficiary from "./RemoveBeneficiary";
import TransferMoney from "./TransferMoney";
import ViewStatement from "./ViewStatement";

const dashboard = [
  "Create Account",
  "Add Beneficiary",
  "Remove Beneficiary",
  "Tranfer Money",
  "View Startment",
];

type Props = {};

const Dashboard = (props: Props) => {
  const [selectedDashboardItem, setSelectedDashboardItem] = useState<
    string | null
  >(null);
  console.log(selectedDashboardItem, "selectedDashboardItem");

  return (
    <>
      {/* <Card>
    <div className="row">
      <div style={{ display: "inline-flex" }}>
        <img src={img} className="imgBackIcon" alt="img Back Icon"></img>
        <div style={{ textAlign: "right" }}>
          <nav>
            <ul>
              <li>Dashboard</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </Card> */}
      <Card>
        <div className="row">
          <div className="col col-6" style={{ height: "73vh" }}>
            <Card height="100%">
              <ul className="list-group">
                {dashboard.map((item: any, i: number) => {
                  return (
                    <li
                      key={i}
                      onClick={() => {
                        setSelectedDashboardItem(item);
                      }}
                      style={{ cursor: "pointer" }}
                      className={`list-group-item ${
                        selectedDashboardItem === item ? "active" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </Card>
          </div>
          <div className="col col-6">
            {selectedDashboardItem === null && <AccountList />}
            {selectedDashboardItem === dashboard[0] && <CreateAccount />}
            {selectedDashboardItem === dashboard[1] && <AddBeneficiary />}
            {selectedDashboardItem === dashboard[2] && <RemoveBeneficiary />}
            {selectedDashboardItem === dashboard[3] && <TransferMoney />}
            {selectedDashboardItem === dashboard[4] && <ViewStatement />}
          </div>
        </div>
      </Card>
    </>
  );
};

export default Dashboard;
