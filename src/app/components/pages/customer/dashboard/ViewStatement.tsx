import React, { useState } from "react";
import {
  AccountType,
  BeneficiaryType,
  DashboardType,
  TransactionHistoryType,
} from "../../../../global.types";
import Card from "../../../common/Card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import moment from "moment";

const ViewStatement = ({
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
  const [selectedAccount, setselectedAccount] = useState<AccountType | null>(
    null
  );
  const [statement, setStatement] = useState<TransactionHistoryType[]>([]);
  // const statement = [
  //   {
  //     date: new Date(),
  //     reference: "123",
  //     amount: 500,
  //     transactionType: "CR",
  //   },
  //   {
  //     date: new Date().setDate(2),
  //     reference: "123453",
  //     amount: 2000,
  //     transactionType: "DR",
  //   },
  // ];
  const dateBodyTemplate = (rowData: any) => {
    return <div>{moment(rowData.date).format("DD-MMM-YYYY")}</div>;
  };
  const change = (event: any) => {
    const find = accountList.find((f) => f.id === event.target.value);
    setselectedAccount(find || null);
  };
  return (
    <Card height="99%">
      <h1>View Startment</h1>
      <div className="row">
        <div className="col-6">
          <select
            placeholder="Select Your Account No"
            onChange={change}
            // value={state.value}
          >
            <option value="-1">Select Your Account No</option>
            {accountList &&
              accountList.map((account: AccountType) => {
                return (
                  <option key={account.id} value={account.id}>
                    {account.accountNumber}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="col-6">
          <button type="button">Show</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          AC NO :<strong> {selectedAccount?.accountNumber} </strong>
        </div>
        <div className="col-6">
          Balance: <strong> {selectedAccount?.initialDeposit} </strong>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <DataTable
            value={selectedAccount?.transaction || []}
            paginator
            responsiveLayout="scroll"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
            rows={10}
            rowsPerPageOptions={[10, 20, 50]}
          >
            <Column body={dateBodyTemplate} header="Date"></Column>
            <Column field="referenceNumber" header="Reference"></Column>
            <Column field="amount" header="Amount"></Column>
            <Column field="transactionType" header="Transaction Type"></Column>
          </DataTable>
        </div>
      </div>
    </Card>
  );
};

export default ViewStatement;
