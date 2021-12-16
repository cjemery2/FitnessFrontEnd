import React from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../auth";

const Header = ({ loggedIn, setLoggedIn }) => {
  const user = getUser();
  return (
    <div>
      {loggedIn ? (
        <>
          <NavLink className="Head-home" to="/">
            Home
          </NavLink>
          <NavLink className="Head-routines" to="/routines">
            Routines
          </NavLink>
          <NavLink className="Head-activities" to="/activities">
            Activities
          </NavLink>
          <NavLink className="loggedUser" to="/my-info">{`${user}`}</NavLink>
          <NavLink
            className="Head-Logged-in"
            to="/login"
            onClick={() => {
              localStorage.clear();
              setLoggedIn(false);
            }}
          >
            Log Out
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="Head-home" to="/">
            Home
          </NavLink>
          <NavLink className="Head-routines" to="/routines">
            Routines
          </NavLink>
          <NavLink className="Head-activities" to="/activities">
            Activities
          </NavLink>
          <NavLink className="Head-login" to="/login">
            Login
          </NavLink>
          <NavLink className="Head-register" to="/register">
            Register
          </NavLink>
        </>
      )}
      ;
    </div>
  );
};

export default Header;