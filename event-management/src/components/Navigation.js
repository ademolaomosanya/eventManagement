import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div xlassName="nav--item">
             
            <div className="navigation">
            <nav className="nav--container">
                    <NavLink className="navbar-brand" to="/">
                        DELUXE EVENT
                    </NavLink>
                </nav>
              <nav className="link--container">
              <NavLink className="nav-link" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/CreateEventPage">
                    Create An Event
                </NavLink>
                <NavLink className="nav-link" to="/Facilities">
                    Facilities
                </NavLink>
                <NavLink className="nav-link" to="/Signin">
                    Signin
                </NavLink>
                <NavLink className="nav-link" to="/Signup">
                    Signup
                </NavLink>
              </nav>
            </div>
        </div>
    );
}

