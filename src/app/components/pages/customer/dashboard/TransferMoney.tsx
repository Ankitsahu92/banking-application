import React, { useState } from "react";
import {
  AccountType,
  BeneficiaryType,
  DashboardType,
} from "../../../../global.types";
import Card from "../../../common/Card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { RadioButton } from "primereact/radiobutton";

const TransferMoney = ({
  accountList,
  beneficiaryList,
  formData,
  setFormData,
  onSubmitClicked,
}: {
  accountList: AccountType[];
  beneficiaryList: BeneficiaryType[];
  formData: DashboardType;
  setFormData: (value: React.SetStateAction<DashboardType>) => void;
  onSubmitClicked: any;
}) => {
  const [selectedAccput, setselectedAccput] = useState<AccountType | null>(
    null
  );
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
        checked={rowData.accountNumber === selectedAccput?.accountNumber}
        onChange={() => {
          setselectedAccput(rowData);
        }}
      ></RadioButton>
    );
  };

  // const selectedAccput: AccountType | null = null;
  const onlyNumberKey = (evt: any) => {
    // Only ASCII character in that range allowed
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      evt.preventDefault();
      return false;
    }

    return true;
  };

  return (
    <Card height="99%">
      <h1>Tranfer Money</h1>
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
          header="Action"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
      {selectedAccput && (
        <>
          <div className="row">
            <div className="col-sm-12">
              <select placeholder="Select A/C">
                <option value="-1">Select A/C</option>
                {beneficiaryList &&
                  beneficiaryList.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.accountNumber} ({item.acountHolderName})
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input
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
        </>
      )}
    </Card>
  );
};

export default TransferMoney;
