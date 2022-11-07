import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPassword from "../auth/ForgotPassword";
import Login from "../auth/Login";
import UpdatePassword from "../auth/UpdatePassword";
import AddBeneficiary from "../pages/AddBeneficiary";
import ApproveAccount from "../pages/ApproveAccount";
import ApproveBeneficiary from "../pages/ApproveBeneficiary";
import CreateAccount from "../pages/CreateAccount";
import CreateStaff from "../pages/CreateStaff";
import CustomerRegistration from "../pages/CustomerRegistration";
import Dashboard from "../pages/Dashboard";
import EnableDisableStaff from "../pages/EnableDisableStaff";
import Profile from "../pages/Profile";
import RemoveBeneficiary from "../pages/RemoveBeneficiary";
import SecurityQuestionMismatch from "../pages/SecurityQuestionMismatch";
import StaffView from "../pages/StaffView";
import Transfer from "../pages/Transfer";
import TransferMoney from "../pages/TransferMoney";
import ViewAccount from "../pages/ViewAccount";
import ViewStatement from "../pages/ViewStatement";

type Props = {};

type State = {};

class RootRouter extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/UpdatePassword" element={<UpdatePassword />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>
        <Route
          path="/SecurityQuestionMismatch"
          element={<SecurityQuestionMismatch />}
        ></Route>
        <Route
          path="/CustomerRegistration"
          element={<CustomerRegistration />}
        ></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route
          path="/EnableDisableStaff"
          element={<EnableDisableStaff />}
        ></Route>
        <Route path="/CreateStaff" element={<CreateStaff />}></Route>
        <Route path="/ViewAccount" element={<ViewAccount />}></Route>
        <Route
          path="/ApproveBeneficiary"
          element={<ApproveBeneficiary />}
        ></Route>
        <Route path="/Transfer" element={<Transfer />}></Route>
        <Route path="/ApproveAccount" element={<ApproveAccount />}></Route>
        <Route path="/StaffView" element={<StaffView />}></Route>
        <Route path="/ViewStatement" element={<ViewStatement />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/TransferMoney" element={<TransferMoney />}></Route>
        <Route
          path="/RemoveBeneficiary"
          element={<RemoveBeneficiary />}
        ></Route>
        <Route path="/AddBeneficiary" element={<AddBeneficiary />}></Route>
        <Route path="/CreateAccount" element={<CreateAccount />}></Route>
      </Routes>
    );
  }
}

export default RootRouter;
