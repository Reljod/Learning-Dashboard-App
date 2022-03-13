import React from "react";
import ProfilePic from "../assets/profile-pic.jpg"
import NavButton from "./NavButton";
import "../styles/navigation/navigation.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ProfilePicture imgDir={ProfilePic}></ProfilePicture>
      <NavButton buttonClass="dashboard-icon" text="Dashboard" path="/dashboard" />
      <NavButton buttonClass="notes-icon" text="Notes" path="/notes" />
    </div>
  );
}

const ProfilePicture = ({imgDir}) => {
  return (
    <div className="profile-picture">
      <img 
        className="profile-picture-img"
        src={imgDir}
        alt="User profile"></img>
    </div>
  )
}

export default NavBar;