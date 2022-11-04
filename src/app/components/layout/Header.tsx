import React, { Component } from "react";
import styles from "./Header.module.scss";

type Props = {};

type State = {};

class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <header>
        <nav>
          {/* nav Logo */}
          <div className={styles.logo}>Banking Application</div>
          {/* nav List */}
          <ul className={styles.navList}>
            <li className={styles.navLi}>
              <a href="#">Staff Corner</a>
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
