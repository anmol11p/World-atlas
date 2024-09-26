import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [click,SetClick]=useState(false);
  const Active = ({ isActive }) => {
    return isActive ? "Active" : "Inactive";
  };

  const handleThreedotclick=()=>{
      SetClick(!click)
  }
  console.log(click);
  
  return (
   
      <div className="container navbar-container">
         <header>
        <nav className="section-navbar flex">
           <span> <h2>WorldAtlas</h2> </span>
          <ul className={`flex section-nav-list ${click?"section-navlist-responsive":"section-nav-list-hidden"}`}>
            <li>
              <NavLink to="/" className={Active}>
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={Active}>
                {" "}
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className={Active}>
                {" "}
                country
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={Active}>
                contact
              </NavLink>
            </li>
          </ul>
          <span className="three-dot-icon" onClick={handleThreedotclick}>
          <GiHamburgerMenu />
        </span>
        </nav>
        </header>
      </div>
    
  );
};

export default Header;
