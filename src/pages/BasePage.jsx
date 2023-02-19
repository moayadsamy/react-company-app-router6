import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../resources/css/custom.css";
import logo from "../resources/img/logo.png";
import AboutPage from "./AboutPage";
import { ContactPage } from "./ContactPage";
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";

let BasePage = () => {
  return (
    <Fragment>
      <nav>
        <ul className="topnav">
          <li>
            <a href="#">
              <img src={logo} height="50" />
            </a>
          </li>
          <div className="right">
            <li>
              <NavLink
                to="/"
                className={(props) => (props.isActive ? "active" : "in-active")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(props) => (props.isActive ? "active" : "in-active")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={(props) => (props.isActive ? "active" : "in-active")}
              >
                project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(props) => (props.isActive ? "active" : "in-active")}
              >
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer>
        <div className="copyright">Copyright 2022 . All Rights Reserved.</div>
      </footer>
    </Fragment>
  );
};
export default BasePage;
