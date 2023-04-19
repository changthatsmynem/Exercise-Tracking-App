import React from "react";
import styles from "./Mainheader.module.css";

const Mainheader = ({ children }) => {
  return <header className={styles["main-header"]}>{children}</header>;
};

export default Mainheader;
