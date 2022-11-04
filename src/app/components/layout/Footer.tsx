import React, { Component } from "react";
import styles from "./Footer.module.scss";

type Props = {};

type State = {};

class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <footer className={styles.footer}>
        <p>© Copyright 2015 Banking Application. All rights reserved.</p>
      </footer>
    );
  }
}

export default Footer;
