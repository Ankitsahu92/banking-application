import React, { useEffect, useState } from "react";
import Card from "../../../common/Card";
import AccountList from "./AccountList";
import AddBeneficiary from "./AddBeneficiary";
import CreateAccount from "./CreateAccount";
import RemoveBeneficiary from "./RemoveBeneficiary";
import TransferMoney from "./TransferMoney";
import ViewStatement from "./ViewStatement";

import { connect } from "react-redux";
import { AccountType } from "../../../../global.types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { createOrUpdateAccount } from "../../../../redux/actions/dashboardAction";
import { AppState } from "../../../../redux/store";

const dashboard = [
  "Create List",
  "Create Account",
  "Add Beneficiary",
  "Remove Beneficiary",
  "Tranfer Money",
  "View Startment",
];
export const Dashboard = ({
  account,
  accountList,
  loading,
  createOrUpdateAccount,
}: DashboardProps) => {
  const [selectedDashboardItem, setSelectedDashboardItem] = useState<
    string | null
  >(dashboard[0]);

  const [formData, setFormData] = useState<AccountType>(
    account
      ? account
      : {
          id: "",
          accountNumber: "",
          initialDeposit: 0,
          typeOfAccount: "",
          userID: "",
        }
  );
  const navigate = useNavigate();
  const onSubmitClicked = () => {
    console.log("onSubmitClicked", formData);
    createOrUpdateAccount(formData, navigate);
  };

  useEffect(() => {
    console.log("useEffect", account);

    setFormData(
      account
        ? account
        : {
            id: "",
            accountNumber: "",
            initialDeposit: 0,
            typeOfAccount: "",
            userID: "",
          }
    );
  }, [account]);

  return (
    <>
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
            {selectedDashboardItem === dashboard[0] && <AccountList />}
            {selectedDashboardItem === dashboard[1] && (
              <CreateAccount
                formData={formData}
                setFormData={setFormData}
                onSubmitClicked={onSubmitClicked}
              />
            )}
            {selectedDashboardItem === dashboard[2] && <AddBeneficiary />}
            {selectedDashboardItem === dashboard[3] && <RemoveBeneficiary />}
            {selectedDashboardItem === dashboard[4] && <TransferMoney />}
            {selectedDashboardItem === dashboard[5] && <ViewStatement />}
          </div>
        </div>
      </Card>
    </>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = (state: AppState) => ({
  account: state.dashboard.account || null,
  accountList: state.dashboard.accountList || [],
  loading: state.dashboard.loading || false,
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
}
