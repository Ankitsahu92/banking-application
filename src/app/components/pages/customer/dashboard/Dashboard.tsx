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
  OtherBeneficiaryAccountsType,
  TransferMoneyType,
} from "../../../../global.types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  createOrUpdateAccount,
  createOrUpdateBeneficiary,
  deleteBeneficiary,
  foundTransferMoney,
  getAllAccount,
  getAllBeneficiary,
  getOtherBeneficiaryAccounts,
} from "../../../../redux/actions/dashboardAction";
import { AppState } from "../../../../redux/store";

const dashboard = [
  "Account List",
  "Create Account",
  "Add Beneficiary",
  "Remove Beneficiary",
  "Transfer Money",
  "View Statement",
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

const initialTransferMoney = {
  amount: 0,
  accountNumber: "",
  id: "",
  comment: "",
  tranferFromID: "",
  tranferToID: "",
} as TransferMoneyType;

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

  transferMoney,
  foundTransferMoney,

  getOtherBeneficiaryAccounts,
  otherBeneficiary,
}: DashboardProps) => {
  const [selectedDashboardItem, setSelectedDashboardItem] = useState<
    string | null
  >(dashboard[0]);

  const [formData, setFormData] = useState<DashboardType>({
    account: account || initialAccount,
    beneficiary: beneficiary || initialBeneficiary,
    transferMoney: transferMoney || initialTransferMoney,
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
      case "Transfer Money":
        foundTransferMoney(data, navigate);
        break;
      case "View Statement":
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
      case dashboard[4]:
        getAllBeneficiary();
        getAllAccount();
        getOtherBeneficiaryAccounts();
        break;
      case dashboard[5]:
        getAllAccount();
        break;
      default:
        break;
    }
  }, [selectedDashboardItem]);
  return (
    <>
      <div className="flexRow">
        <div className="flexColumn">
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
        <div className="flexColumn" style={{ overflow: "auto" }}>
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
              otherBeneficiary={otherBeneficiary || []}
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
          {selectedDashboardItem === dashboard[4] && (
            <TransferMoney
              accountList={accountList || []}
              beneficiaryList={beneficiaryList || []}
              otherBeneficiary={otherBeneficiary || []}
              formData={formData}
              setFormData={setFormData}
              onSubmitClicked={onSubmitClicked}
            />
          )}
          {selectedDashboardItem === dashboard[5] && (
            <ViewStatement
              accountList={accountList || []}
              beneficiaryList={beneficiaryList || []}
              formData={formData}
              setFormData={setFormData}
              onSubmitClicked={onSubmitClicked}
            />
          )}
        </div>
      </div>
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

  transferMoney: state.dashboard.transferMoney || null,
  otherBeneficiary: state.dashboard.otherBeneficiary || [],
});

const mapDispatchToProps = {
  createOrUpdateAccount,
  getAllAccount,

  getAllBeneficiary,
  createOrUpdateBeneficiary,
  deleteBeneficiary,

  foundTransferMoney,

  getOtherBeneficiaryAccounts,
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

  transferMoney?: TransferMoneyType;
  foundTransferMoney: (
    beneficiaryData: TransferMoneyType,
    navigate: NavigateFunction
  ) => void;

  getOtherBeneficiaryAccounts: () => void;
  otherBeneficiary: OtherBeneficiaryAccountsType[];
}
