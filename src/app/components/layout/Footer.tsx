import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <p>
        © Copyright {new Date().getFullYear()} Banking Application. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
