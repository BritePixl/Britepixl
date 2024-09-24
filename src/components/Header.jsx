import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hState, sethState] = useState("top");

  useEffect(() => {
    let lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);

  const loc = useLocation();

  return (
    <header className={hState}>
      <SocialMediaIcons />
      <div className="header_bar">
        <div className="to_left header_logo_container">
          <Link to="/">
            <img src={logo} alt="BritePixl logo" />
          </Link>
        </div>
        <div className="to_right header_menu_container">
          <i
            onClick={() => setShowMenu(false)}
            className={showMenu ? "menu_on_mobile" : ""}
          >
            <Link
              className={
                loc.pathname === "/"
                  ? "link hide_on_mobile link_active"
                  : "link hide_on_mobile"
              }
              to="/"
            >
              HOME
            </Link>
            <Link
              className={
                loc.pathname === "/about"
                  ? "link hide_on_mobile link_active"
                  : "link hide_on_mobile"
              }
              to="/about"
            >
              ABOUT
            </Link>
            <Link
              className={
                loc.pathname === "/projects"
                  ? "link hide_on_mobile link_active"
                  : "link hide_on_mobile"
              }
              to="/projects"
            >
              PROJECTS
            </Link>
            <Link
              className={
                loc.pathname === "/contact"
                  ? "link hide_on_mobile link_active"
                  : "link hide_on_mobile"
              }
              to="/contact"
            >
              CONTACT
            </Link>
          </i>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="link pi pi-bars"
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
