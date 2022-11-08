import React, { Component } from "react";
import Card from "../../common/Card";
// import img from "../../../../assets/images/bank-svgrepo-com.svg";
// import { Link } from "react-router-dom";
import Switch from "../../common/Switch";
type Props = {};

type State = {
  enableDisable: boolean;
  dashboardList: string[];
  selectedDashboardItem: string;
};
const dashboard = [
  "Create Account",
  "Add Beneficiary",
  "Remove Beneficiary",
  "Tranfer Money",
  "View Startment",
];
class Dashboard extends Component<Props, State> {
  //enableDisable = useState<boolean>(false);
  state = {
    enableDisable: false,
    dashboardList: dashboard,
    selectedDashboardItem: dashboard[0],
  };
  render() {
    return (
      <>
        {/* <Card>
          <div className="row">
            <div style={{ display: "inline-flex" }}>
              <img src={img} className="imgBackIcon" alt="img Back Icon"></img>
              <div style={{ textAlign: "right" }}>
                <nav>
                  <ul>
                    <li>Profile</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </Card> */}
        <Card>
          <div className="row">
            <div className="col col-6" style={{ height: "73vh" }}>
              <Card height="100%">
                <ul className="list-group">
                  {this.state.dashboardList.map((item) => {
                    return (
                      <li
                        onClick={() => {
                          this.setState((pre) => {
                            return { ...pre, selectedDashboardItem: item };
                          });
                        }}
                        style={{ cursor: "pointer" }}
                        className={`list-group-item ${
                          this.state.selectedDashboardItem === item
                            ? "active"
                            : ""
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
                        isChecked={this.state.enableDisable}
                        label="Enable/Disable"
                        onChange={(e) => {
                          this.setState((pre) => {
                            return {
                              ...pre,
                              enableDisable: e,
                            };
                          });
                          console.log("onchange ", e);
                        }}
                      />
                    </div>
                    <div className="col col-6" style={{ textAlign: "end" }}>
                      <button type="button">View More</button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default Dashboard;
