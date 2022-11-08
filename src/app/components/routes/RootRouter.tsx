import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "../auth/ForgotPassword";
import Login from "../auth/Login";
import UpdatePassword from "../auth/UpdatePassword";
import AddBeneficiary from "../pages/customer/AddBeneficiary";
import CreateAccount from "../pages/customer/CreateAccount";
import CreateStaff from "../pages/staff/CreateStaff";
import Dashboard from "../pages/customer/Dashboard";
import EnableDisableStaff from "../pages/staff/EnableDisableStaff";
import Profile from "../pages/customer/Profile";
import RemoveBeneficiary from "../pages/customer/RemoveBeneficiary";
import ViewAccount from "../pages/approver/ViewAccountStatement";
import CustomerRegistration from "../pages/customer/CustomerRegistration";
import TransferAmont from "../pages/customer/TransferAmont";
import ViewAccouuntStatement from "../pages/customer/ViewAccouuntStatement";
import ApproveModifyBeneficiary from "../pages/staff/ApproveModifyBeneficiary";
import ApproveRejectCustomeAccount from "../pages/staff/ApproveRejectCustomeAccount";
import CreditDebitAmount from "../pages/staff/CreditDebitAmount";
import EnableBlockCustomer from "../pages/staff/EnableBlockCustomer";

type Props = {};

type State = {};

class RootRouter extends Component<Props, State> {
  state = {};

  render() {
    const loggedIn: boolean = false;
    return (
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/UpdatePassword" element={<UpdatePassword />}></Route>
        <Route path="/ForgotPassword" element={<ForgotPassword />}></Route>

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
          path="/ViewAccouuntStatement"
          element={<ViewAccouuntStatement />}
        ></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/TransferAmont" element={<TransferAmont />}></Route>
        <Route
          path="/RemoveBeneficiary"
          element={<RemoveBeneficiary />}
        ></Route>
        <Route path="/AddBeneficiary" element={<AddBeneficiary />}></Route>
        <Route path="/CreateAccount" element={<CreateAccount />}></Route>
        <Route
          path="/ApproveRejectCustomeAccount"
          element={<ApproveRejectCustomeAccount />}
        ></Route>
        <Route
          path="/EnableBlockCustomer"
          element={<EnableBlockCustomer />}
        ></Route>
        <Route
          path="/CreditDebitAmount"
          element={<CreditDebitAmount />}
        ></Route>
        <Route
          path="/ApproveModifyBeneficiary"
          element={<ApproveModifyBeneficiary />}
        ></Route>
        <Route
          path="/"
          element={loggedIn ? <Dashboard /> : <Navigate replace to="/login" />}
        ></Route>
      </Routes>
    );
  }
}

export default RootRouter;
