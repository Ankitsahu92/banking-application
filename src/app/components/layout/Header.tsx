import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppConstant } from "../../modal/AppConstant";
//import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const userType: string | null = localStorage.getItem("UserType"); // AppConstant.UserType.Customer;
  const isCustomer = userType === AppConstant.UserType.Customer;
  const isStaff = userType === AppConstant.UserType.Staff;
  const isAdminUser = userType === AppConstant.UserType.AdminUser;
  const isAuthenticated: boolean = isCustomer || isStaff || isAdminUser;
  const userName = localStorage.getItem(AppConstant.UserName);

  const navigate = useNavigate();
  const onLogoutClick = (e: any) => {
    e.preventDefault();
    console.log("onLogoutClick");
    localStorage.removeItem("UserType");
    navigate("/login");
  };

  return (
    <header>
      <nav>
        {/* nav Logo */}
        <div
          className={styles.logo}
          onClick={() => {
            // navigate("/");
          }}
        >
          {/* <img src={img} className="imgBackIcon" alt="img Back Icon"></img> */}
          Banking Application
        </div>
        {/* nav List */}
        <ul className={styles.navList}>
          {isAuthenticated && (
            <>
              {isStaff && <li className={styles.navLi}>Staff Corner</li>}
              <li className={styles.navLi}>
                <Link to="/Profile">Profile</Link>
              </li>
              <li className={styles.navLi} onClick={onLogoutClick}>
                Logout
              </li>
              <li className={styles.navLi}>Welcom {userName}</li>
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

export default Header;
