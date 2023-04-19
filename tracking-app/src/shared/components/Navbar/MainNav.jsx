import React, { useState } from "react";
import { Link } from "react-router-dom";

//parts of navigation bar
import Mainheader from "./Mainheader";
import NavLinks from "./NavLinks";
import NavMobile from "./NavMobile";
import Backdrop from "../UIElements/Backdrop";

//styles
import "./MainNav.css";

const MainNav = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <NavMobile show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__side-nav">
          <NavLinks />
        </nav>
      </NavMobile>
      <Mainheader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-nav_title">
          <Link to="/">EVERLASTING</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </Mainheader>
    </>
  );
};

export default MainNav;
