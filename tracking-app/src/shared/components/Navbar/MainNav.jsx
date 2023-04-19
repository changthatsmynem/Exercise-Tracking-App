import React from "react";
import { Link } from "react-router-dom";

//styles
import styles from "./MainNav.module.css";

//parts of navigation bar
import Mainheader from "./Mainheader";
import NavLinks from "./NavLinks";

const MainNav = () => {
  return (
    <>
      <Mainheader>
        <h1 className={styles["main-nav_title"]}>
          <Link to="/">EVERLASTING</Link>
        </h1>
        <NavLinks />
      </Mainheader>
    </>
  );
};

export default MainNav;
