import React from 'react';
import '../styles/navigation/navigation.css';
import { useNavigate, useLocation } from "react-router-dom";

const NavButton = ({buttonClass, text, path}) => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const buttonClassName = currentPath === path ? 
    'nav-button-pressed' : 
    'nav-button';

  return (
    <button className={ buttonClassName } onClick={() => navigate(path)}>
      <div className={ buttonClass }></div>
      <p>{ text }</p>
    </button>
  )
}

export default NavButton;