import React from "react";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header clearFix">
      <div className="container clearFix">
        <div className="header--left">
          <div className="header__icon">
            <i class="fab fa-github"></i>
          </div>
          <div className="search header__search">
            <input
              className="search__input"
              placeholder="Search or jump to..."
              type="text"
            />
            <div className="search__input-inside">/aadasd</div>
          </div>

          <div className="nav header__nav clearFix">
            <li className="nav__items">Pull requests</li>
            <li className="nav__items">Issues</li>
            <li className="nav__items">Marketplace</li>
            <li className="nav__items">Explore</li>
          </div>
        </div>
        <ul className="header--right">
          <li className="header__icon-right">
            <i class="far fa-bell"></i>
          </li>
          <li className="header__icon-right">
            <i class="fas fa-plus"></i>
          </li>
          <li className="header__icon-right">
            <i class="fas fa-user"></i>
          </li>
        </ul>
        <div className="ham-menu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
