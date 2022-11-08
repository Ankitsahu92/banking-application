import React, { Component } from "react";
import img from "../../../assets/images/bank-svgrepo-com.svg";
import Card from "../../common/Card";
type Props = {};

type State = {};

class EnableDisableStaff extends Component<Props, State> {
  state = {};
  //https://stackblitz.com/edit/react-1zaeqk?file=src%2FPagination.js
  render() {
    return (
      <>
        <Card>
          <div className="row">
            <div className="col col-6">
              <img src={img} className="imgBackIcon" alt="img Back Icon"></img>
            </div>
            <div className="col col-6 headerTextRight">Super Admin</div>
          </div>
        </Card>
        <div className="col col-12" style={{ textAlign: "center" }}>
          <button type="button">Create Staff</button>
          <button type="button" className="active">
            View Staff
          </button>
        </div>
        <Card>
          <div className="row">
            <div className="col col-12">
              <table>
                <thead>
                  <tr>
                    <th colSpan={3}>Enable Disable Customer</th>
                  </tr>
                  <tr>
                    <th>Staff Name</th>
                    <th>Staff User Name</th>
                    <th>Enable/Disable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brett</td>
                    <td>1234</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default EnableDisableStaff;
