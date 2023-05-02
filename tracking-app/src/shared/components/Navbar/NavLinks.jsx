import { useLayoutEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

//styles for navlinks
import "./NavLinks.css";

//auth context
import { AuthContext } from "../../context/auth-context";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact="true">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink>Logout</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
