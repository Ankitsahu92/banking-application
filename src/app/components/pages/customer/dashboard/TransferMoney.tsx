import React, { useState } from "react";
import {
  AccountType,
  BeneficiaryType,
  DashboardType,
  OtherBeneficiaryAccountsType,
  TransferMoneyType,
} from "../../../../global.types";
import Card from "../../../common/Card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { RadioButton } from "primereact/radiobutton";

const TransferMoney = ({
  accountList,
  beneficiaryList,
  otherBeneficiary,
  formData,
  setFormData,
  onSubmitClicked,
}: {
  accountList: AccountType[];
  beneficiaryList: BeneficiaryType[];
  otherBeneficiary: OtherBeneficiaryAccountsType[];
  formData: DashboardType;
  setFormData: (value: React.SetStateAction<DashboardType>) => void;
  onSubmitClicked: any;
}) => {
  const actionBodyTemplate = (rowData: AccountType) => {
    return (
      // <Button
      //   // onClick={() =>
      //   //   props.onSubmitClicked({ action: "delete", id: rowData.id })
      //   // }
      //   icon="pi pi-trash"
      //   className="p-button-rounded p-button-danger"
      //   aria-label="Delete"
      // />
      <RadioButton
        value={rowData.accountNumber}
        name="city"
        checked={rowData.accountNumber === selectedAccount?.accountNumber}
        onChange={() => {
          setselectedAccount(rowData);
        }}
      ></RadioButton>
    );
  };

  // const selectedAccount: AccountType | null = null;
  const onlyNumberKey = (evt: any) => {
    // Only ASCII character in that range allowed
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      return false;
    }

    return true;
  };

  const [selectedAccount, setselectedAccount] = useState<AccountType | null>(
    null
  );
  const [amout, setAmount] = useState<string>("0");
  const [reason, setReason] = useState<string>("");
  const [selectAccount, setselectAccount] = useState<string>("");

  const onSelectAccountChange = (event: any) => {
    setselectAccount(event.target.value);
  };

  const onTranferBtnClicked = () => {
    let isValid = true;
    if (!selectAccount) {
      isValid = false;
      alert("Please Select tranfer account");
    }

    if (!amout || +amout === 0) {
      isValid = false;
      alert("Please Enter Amount");
    }

    if (!reason) {
      isValid = false;
      alert("Please Enter Reason");
    }
    if (isValid) {
      const data: TransferMoneyType = {
        id: "",
        tranferFromID: selectedAccount!.id,
        tranferToID: selectAccount,
        amount: +amout,
        comment: reason,
      };
      onSubmitClicked(data);
    }
  };

  return (
    <Card height="99%">
      <h1>Transfer Money</h1>
      <strong> Select Source Account</strong>
      <DataTable value={accountList} responsiveLayout="scroll">
        <Column
          field="accountNumber"
          header="Account No"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="typeOfAccount"
          header="Type Of Account"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="initialDeposit"
          header="Amont"
          style={{ width: "25%" }}
        ></Column>
        <Column
          body={actionBodyTemplate}
          header="Select Account"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
      {selectedAccount && (
        <>
          <div className="row">
            <div className="col-sm-12">
              <select
                placeholder="Select A/C"
                onChange={onSelectAccountChange}
                value={selectAccount}
              >
                <option value="-1">Select A/C</option>
                {otherBeneficiary &&
                  otherBeneficiary.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.accountNumber}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input
                defaultValue={amout}
                onChange={(e: any) => {
                  setAmount(e.target.value);
                }}
                maxLength={5}
                onKeyPress={onlyNumberKey}
                type="text"
                className="form-control"
                placeholder="Enter Amount"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input
                defaultValue={reason}
                onChange={(e: any) => {
                  setReason(e.target.value);
                }}
                type="text"
                className="form-control"
                placeholder="Enter Reason"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button type="button" onClick={onTranferBtnClicked}>
                Tranfer
              </button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default TransferMoney;
