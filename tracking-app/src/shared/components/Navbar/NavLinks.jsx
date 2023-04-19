import { useLayoutEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

//styles for navlinks
import styles from "./NavLinks.module.css";

//auth-context
// import { AuthContext } from "../../context/AuthContext";

const NavLinks = () => {
  //   const auth = useContext(AuthContext);

  return (
    <ul className={styles["nav-links"]}>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1">Login</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
