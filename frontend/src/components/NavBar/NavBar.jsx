import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>ReHydrate</b>
          </Link>
        </li>
        <li>
          <Link to="/addgoal" style={{ textDecoration: "none", color: "white" }}>
            <b>Add a goal</b>
          </Link>
        </li>
        <li>
          <Link to="/goals" style={{ textDecoration: "none", color: "white" }}>
            <b>My goals</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
