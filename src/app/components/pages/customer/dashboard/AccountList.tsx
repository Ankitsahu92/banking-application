import React, { useState } from "react";
import Card from "../../../common/Card";
import Switch from "../../../common/Switch";

type Props = {};

const AccountList = (props: Props) => {
  const [enableDisable, setEnableDisable] = useState<boolean>(false);

  return (
    <div className="col col-12" style={{ height: "36vh" }}>
      <Card>
        <div className="row">
          <div className="col col-12">
            Account Number: <b>SB</b>
          </div>
          <div className="col col-12">
            Account Balance: <b>3234</b>
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
    </div>
  );
};

export default AccountList;
