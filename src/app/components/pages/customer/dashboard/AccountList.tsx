import React, { useState } from "react";
import { AccountType } from "../../../../global.types";
import Card from "../../../common/Card";
import Switch from "../../../common/Switch";

type Props = {
  accountList: AccountType[];
};

const AccountList = (props: Props) => {
  const [enableDisable, setEnableDisable] = useState<boolean>(false);

  return (
    <div className="col col-12" style={{ height: "36vh" }}>
      {props.accountList &&
        props.accountList.map((account, index) => {
          return <Account key={account.id} account={account} />;
        })}
    </div>
  );
};

type AccountProps = {
  account: AccountType;
};
const Account = (props: AccountProps) => {
  const [enableDisable, setEnableDisable] = useState<boolean>(
    props.account?.isEnabled || false
  );

  return (
    <Card>
      <div className="row">
        <div className="col col-12">
          Account Number: <b>{props.account.typeOfAccount}</b>
        </div>
        <div className="col col-12">
          Account Balance: <b>{props.account.initialDeposit}</b>
        </div>
        <br /> <br />
        <div className="col col-6">
          <Switch
            id="chkSwitch"
            isChecked={enableDisable}
            label="Enable/Disable"
            onChange={(e: boolean) => {
              setEnableDisable(e);
            }}
          />
        </div>
        <div className="col col-6" style={{ textAlign: "end" }}>
          <button type="button">View More</button>
        </div>
      </div>
    </Card>
  );
};

export default AccountList;
