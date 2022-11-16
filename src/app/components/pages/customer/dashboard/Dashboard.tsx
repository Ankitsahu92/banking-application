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
import {
  createOrUpdateAccount,
  getAllAccount,
} from "../../../../redux/actions/dashboardAction";
import { AppState } from "../../../../redux/store";

const dashboard = [
  "Account List",
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
  getAllAccount,
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
          isEnabled: true,
        }
  );
  const navigate = useNavigate();
  const onSubmitClicked = (data: any) => {
    switch (selectedDashboardItem) {
      case "Account List":
        createOrUpdateAccount(data, navigate);
        break;
      case "Create Account":
        createOrUpdateAccount(formData, navigate);
        setTimeout(() => {
          setSelectedDashboardItem(dashboard[0]);
        }, 500);
        break;
      default:
        break;
    }
  };

  // useEffect(() => {

  //   setFormData(
  //     account
  //       ? account
  //       : {
  //           id: "",
  //           accountNumber: "",
  //           initialDeposit: 0,
  //           typeOfAccount: "",
  //           userID: "",
  //         }
  //   );
  // }, [account]);

  useEffect(() => {
    switch (selectedDashboardItem) {
      case dashboard[0]:
        getAllAccount();
        break;
      case dashboard[1]:
        setFormData({
          id: "",
          accountNumber: "",
          initialDeposit: 0,
          typeOfAccount: "",
          userID: "",
          isEnabled: true,
        });
        break;
      default:
        break;
    }
  }, [selectedDashboardItem]);
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
          <div className="col col-6" style={{ overflow: "auto" }}>
            {selectedDashboardItem === dashboard[0] && (
              <AccountList
                accountList={accountList || []}
                onSubmitClicked={onSubmitClicked}
              />
            )}
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
  getAllAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

interface DashboardProps {
  account?: AccountType | null;
  accountList?: AccountType[];
  loading: boolean;
  getAllAccount: () => void;
  createOrUpdateAccount: (
    data: AccountType,
    navigate: NavigateFunction
  ) => void;
}
