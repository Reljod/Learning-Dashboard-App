import React from "react";
import ProfilePic from "../assets/profile-pic.jpg"
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ProfilePicture imgDir={ProfilePic}></ProfilePicture>
      <div></div>   
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