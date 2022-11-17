import React, { useEffect, useState } from "react";
import Card from "../../../common/Card";
import AccountList from "./AccountList";
import AddBeneficiary from "./AddBeneficiary";
import CreateAccount from "./CreateAccount";
import RemoveBeneficiary from "./RemoveBeneficiary";
import TransferMoney from "./TransferMoney";
import ViewStatement from "./ViewStatement";

import { connect } from "react-redux";
import {
  AccountType,
  BeneficiaryType,
  DashboardType,
} from "../../../../global.types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  createOrUpdateAccount,
  createOrUpdateBeneficiary,
  deleteBeneficiary,
  getAllAccount,
  getAllBeneficiary,
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

const initialAccount = {
  accountNumber: "",
  id: "",
  initialDeposit: 0,
  typeOfAccount: "SB",
  userID: "",
  isEnabled: true,
} as AccountType;

const initialBeneficiary = {
  accountNumber: "",
  confirmAccountNumber: "",
  id: "",
  acountHolderName: "",
  typeOfAccount: "SB",
  userID: "",
  isEnabled: true,
} as BeneficiaryType;

export const Dashboard = ({
  account,
  accountList,
  loading,
  getAllAccount,
  createOrUpdateAccount,

  beneficiary,
  beneficiaryList,
  getAllBeneficiary,
  createOrUpdateBeneficiary,
  deleteBeneficiary,
}: DashboardProps) => {
  const [selectedDashboardItem, setSelectedDashboardItem] = useState<
    string | null
  >(dashboard[0]);

  const [formData, setFormData] = useState<DashboardType>({
    account: account || initialAccount,
    beneficiary: beneficiary || initialBeneficiary,
  });
  const navigate = useNavigate();
  const onSubmitClicked = (data: any) => {
    switch (selectedDashboardItem) {
      case "Account List":
        createOrUpdateAccount(data, navigate);
        break;
      case "Create Account":
        createOrUpdateAccount(formData.account, navigate);
        setTimeout(() => {
          setSelectedDashboardItem(dashboard[0]);
        }, 500);
        break;
      case "Add Beneficiary":
        console.log(formData.beneficiary, "formData.beneficiary");
        if (
          formData.beneficiary.accountNumber ===
          formData.beneficiary.confirmAccountNumber
        ) {
          createOrUpdateBeneficiary(formData.beneficiary, navigate);
        } else {
          alert("Account number confirm account number mismatch!!!");
        }
        // setTimeout(() => {
        //   setSelectedDashboardItem(dashboard[0]);
        // }, 500);
        break;
      case "Remove Beneficiary":
        if (data.id && data.action === "delete") {
          deleteBeneficiary(data.id, navigate);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (selectedDashboardItem) {
      case dashboard[0]:
        getAllAccount();
        break;
      case dashboard[1]:
        setFormData({
          ...formData,
          account: { ...initialAccount },
        });
        break;
      case dashboard[2]:
        setFormData({
          ...formData,
          beneficiary: { ...initialBeneficiary },
        });
        break;
      case dashboard[3]:
        getAllBeneficiary();
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
            {selectedDashboardItem === dashboard[2] && (
              <AddBeneficiary
                formData={formData}
                setFormData={setFormData}
                onSubmitClicked={onSubmitClicked}
              />
            )}
            {selectedDashboardItem === dashboard[3] && (
              <RemoveBeneficiary
                beneficiaryList={beneficiaryList || []}
                onSubmitClicked={onSubmitClicked}
              />
            )}
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
  loading: state.dashboard.loading || false,

  account: state.dashboard.account || null,
  accountList: state.dashboard.accountList || [],

  beneficiary: state.dashboard.beneficiary || null,
  beneficiaryList: state.dashboard.beneficiaryList || [],
});

const mapDispatchToProps = {
  createOrUpdateAccount,
  getAllAccount,

  getAllBeneficiary,
  createOrUpdateBeneficiary,
  deleteBeneficiary,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

interface DashboardProps {
  loading: boolean;

  account?: AccountType | null;
  accountList?: AccountType[];
  getAllAccount: () => void;
  createOrUpdateAccount: (
    accountData: AccountType,
    navigate: NavigateFunction
  ) => void;

  beneficiary?: BeneficiaryType | null;
  beneficiaryList: BeneficiaryType[];
  getAllBeneficiary: () => void;
  createOrUpdateBeneficiary: (
    beneficiaryData: BeneficiaryType,
    navigate: NavigateFunction
  ) => void;
  deleteBeneficiary: (id: string, navigate: NavigateFunction) => void;
}
