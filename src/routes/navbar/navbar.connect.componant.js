import React from "react";

const NavbarConnect = ({prefix, symbol, text}) => {

    return (
        <span className="navbar-connect-details">
        <a href={`${prefix}:${text}`}>
        <i className={symbol} aria-hidden="true"></i>
          {text}
        </a>
      </span>
    )

}

export default NavbarConnect