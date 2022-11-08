import React, { Component } from "react";
import Card from "../../common/Card";
import img from "../../../../assets/images/bank-svgrepo-com.svg";
import { Link } from "react-router-dom";
type Props = {};

type State = {};

class Dashboard extends Component<Props, State> {
  state = {};

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
                  <li className="list-group-item active">Cras justo odio</li>
                  <li className="list-group-item">Dapibus ac facilisis in</li>
                  <li className="list-group-item">Morbi leo risus</li>
                  <li className="list-group-item">Porta ac consectetur ac</li>
                  <li className="list-group-item">Vestibulum at eros</li>
                </ul>
              </Card>
            </div>
            <div className="col col-6">
              <div className="col col-12" style={{ height: "36vh" }}>
                <Card height="100%">1</Card>
              </div>
              <div className="col col-12" style={{ height: "36vh" }}>
                <Card height="100%">1</Card>
              </div>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default Dashboard;
