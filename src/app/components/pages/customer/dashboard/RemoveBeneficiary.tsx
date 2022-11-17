import React from "react";
import { BeneficiaryType } from "../../../../global.types";
import Card from "../../../common/Card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

type Props = {
  beneficiaryList: BeneficiaryType[];
  onSubmitClicked: any;
};

const RemoveBeneficiary = (props: Props) => {
  const actionBodyTemplate = (rowData: BeneficiaryType) => {
    return (
      <Button
        onClick={() =>
          props.onSubmitClicked({ action: "delete", id: rowData.id })
        }
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger"
        aria-label="Delete"
      />
    );
  };

  return (
    <Card height="99%">
      <div className="row">
        <div className="col col-12">
          <h1>Remove Beneficiary</h1>
        </div>
      </div>
      <DataTable
        value={props.beneficiaryList}
        paginator
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
      >
        <Column
          field="accountNumber"
          header="Account No"
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="acountHolderName"
          header="Acount Holder Name"
          style={{ width: "25%" }}
        ></Column>
        <Column
          body={actionBodyTemplate}
          header="Action"
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </Card>
  );
};

export default RemoveBeneficiary;
