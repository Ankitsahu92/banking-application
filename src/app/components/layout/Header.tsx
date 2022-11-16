import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppConstant } from "../utils/AppConstant";
//import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { connect } from "react-redux";
import { AppState } from "../../redux/store";
import { AuthState } from "../../redux/reducers/auth";
import jwt from "jwt-decode";

export const Header = ({ auth }: HeaderProps) => {
  let userType: string | null = localStorage.getItem(AppConstant.UserType); // AppConstant.UserType.Customer;
  let isCustomer: boolean =
    userType === localStorage.getItem(AppConstant.UserTypeObj.Customer);
  let isStaff: boolean =
    userType === localStorage.getItem(AppConstant.UserTypeObj.Staff);
  let isAdminUser: boolean =
    userType === localStorage.getItem(AppConstant.UserTypeObj.AdminUser);
  // const isAuthenticated: boolean = isCustomer || isStaff || isAdminUser;
  let userName: string | null = localStorage.getItem(AppConstant.UserName);

  const navigate = useNavigate();
  const onLogoutClick = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header>
      <nav>
        {/* nav Logo */}
        <div
          className={styles.logo}
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          {/* <img src={img} className="imgBackIcon" alt="img Back Icon"></img> */}
          Banking Application
        </div>
        {/* nav List */}
        <ul className={styles.navList}>
          {auth.isAuthenticated && (
            <>
              {isStaff && <li className={styles.navLi}>Staff Corner</li>}
              <li className={styles.navLi}>
                <Link to="/Profile">Profile</Link>
              </li>
              <li className={styles.navLi} onClick={onLogoutClick}>
                Logout
              </li>
              <li className={styles.navLi}>Welcom ({userName})</li>
            </>
          )}
        </ul>
        {/* nav Button */}
        {/* <div className={styles.navBtn}>
      <div className={styles.line1} />
      <div className={styles.line2} />
      <div className={styles.line3} />
    </div> */}
      </nav>
    </header>
  );
};

Header.propTypes = {};

const mapStateToProps = (state: AppState) => ({ auth: state.auth });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

interface HeaderProps {
  // setAlert : typeof SetAlert
  auth: AuthState;
}
