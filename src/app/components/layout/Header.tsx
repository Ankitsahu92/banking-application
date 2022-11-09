import React, { ChangeEvent, Component } from "react";
import { Link } from "react-router-dom";
import { AppConstant } from "../../modal/AppConstant";
//import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
//import img from "../../../assets/images/bank-svgrepo-com.svg";
type Props = {};

type State = {};

class Header extends Component<Props, State> {
  state = {};
  userType: string | null = localStorage.getItem("UserType"); // AppConstant.UserType.Customer;

  isCustomer = this.userType === AppConstant.UserType.Customer;
  isStaff = this.userType === AppConstant.UserType.Staff;
  isAdminUser = this.userType === AppConstant.UserType.AdminUser;

  isAuthenticated: boolean =
    this.isCustomer || this.isStaff || this.isAdminUser;

  onLogoutClick = (e: any) => {
    e.preventDefault();
    console.log("onLogoutClick");

    localStorage.removeItem("UserType");
    return false;
  };

  //navigate = useNavigate();
  render(): JSX.Element {
    return (
      <header>
        <nav>
          {/* nav Logo */}
          <div
            className={styles.logo}
            onClick={() => {
              // this.navigate("/");
            }}
          >
            {/* <img src={img} className="imgBackIcon" alt="img Back Icon"></img> */}
            Banking Application
          </div>
          {/* nav List */}
          <ul className={styles.navList}>
            {this.isAuthenticated && (
              <>
                {this.isStaff && <li className={styles.navLi}>Staff Corner</li>}
                <li className={styles.navLi}>
                  <Link to="/Profile">Profile</Link>
                </li>
                <li className={styles.navLi} onClick={this.onLogoutClick}>
                  Logout
                </li>
                <li className={styles.navLi}>Welcom User Name</li>
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
  }
}

export default Header;
