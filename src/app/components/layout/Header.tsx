import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

type Props = {};

type State = {};

class Header extends Component<Props, State> {
  state = {};
  //navigate = useNavigate();
  render() {
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
            Banking Application
          </div>
          {/* nav List */}
          <ul className={styles.navList}>
            <li className={styles.navLi}>
              <a href="void javascript(0)">Staff Corner</a>
            </li>
          </ul>
          {/* nav Button */}
          <div className={styles.navBtn}>
            <div className={styles.line1} />
            <div className={styles.line2} />
            <div className={styles.line3} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
