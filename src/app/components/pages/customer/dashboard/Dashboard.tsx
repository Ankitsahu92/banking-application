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

import { connect } from "react-redux";
import { AccountType } from "../../../../global.types";
import { NavigateFunction } from "react-router-dom";
import { createOrUpdateAccount } from "../../../../redux/actions/accountAction";
import { AppState } from "../../../../redux/store";

const dashboard = [
  "Create Account",
  "Add Beneficiary",
  "Remove Beneficiary",
  "Tranfer Money",
  "View Startment",
];
export const Dashboard = ({
  account,
  accountList,
  dashboardLoading,
  createOrUpdateAccount,
}: DashboardProps) => {
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

Dashboard.propTypes = {};

const mapStateToProps = (state: AppState) => ({
  account: state.account.account || null,
  accountList: state.account.accountList || [],
  dashboardLoading: state.profile.loading || false,
});

const mapDispatchToProps = {
  createOrUpdateAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

interface DashboardProps {
  account?: AccountType | null;
  accountList?: AccountType[];
  loading: boolean;
  createOrUpdateAccount: (
    data: AccountType,
    navigate: NavigateFunction
  ) => void;
  dashboardLoading: boolean;
}
