import React from "react";
import { connect } from "react-redux";
import { NavigateFunction } from "react-router-dom";
import { LoginParamsType } from "../../../global.types";
import { signIn } from "../../../redux/actions/authAction";
import { AuthState } from "../../../redux/reducers/auth";
import { AppState } from "../../../redux/store";
import Card from "../../common/Card";

export const Profile = ({ signIn, auth }: ProfileProps) => {
  return (
    <Card height="100%">
      <div className="container">
        <div className="row">
          <div className="col-3">Customer ID:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Full Name:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Phone:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">PAN:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Aadhar:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Upload PAN:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Aadhar PAN:</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Select Security Question :</div>
          <div className="col-9">
            <select>
              <option>Select Security Question</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Enter Your Answer :</div>
          <div className="col-9">
            <input></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ textAlign: "end" }}>
            <button>Update</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

Profile.propTypes = {};

const mapStateToProps = (state: AppState) => ({ auth: state.auth });

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

interface ProfileProps {
  // setAlert : typeof SetAlert
  signIn: (signInParams: LoginParamsType, navigate: NavigateFunction) => void;
  auth: AuthState;
}
