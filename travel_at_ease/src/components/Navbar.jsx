import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import logo from "../Images/TravelAtEase.png";

export const Navbar = () => {
  const toast = useToast();
  return (
    <div className="Navbar">
      <div>
        <Link to="/">
          <div className="SiteLogo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div style={{ display: "flex" }}>
          <h4>More travel</h4>
          <span className="material-icons" style={{ color: "white" }}>
            expand_more
          </span>
        </div>
      </div>
      <div>
        <div>
          <h4>English</h4>
        </div>
        <div>
          <h4>List your property</h4>
        </div>
        <div>
          <h4>Support</h4>
        </div>
        <div>
          <h4>Trips</h4>
        </div>
        <div>
          <h4>Sign In</h4>
        </div>
      </div>
    </div>
  );
};
