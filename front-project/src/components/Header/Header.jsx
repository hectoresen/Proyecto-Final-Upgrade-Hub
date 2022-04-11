import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./Header.scss";


const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
          <Link className="header__text" to='/'>ZARANDO</Link>
      </div>
    </div>
  );
};

export default Header;
