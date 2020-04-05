import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIntersection } from "react-use";
import { Nav, Logo, NavList, List } from "./NavBarStyle";
import Section2 from "../Section2/Section2";

const NavBar = ({ addClass, show }) => {
  // : (refList.current.className = "");
  const [add, setAdd] = useState({
    home: true,
    skill: false,
    portfolio: false,
    contact: false,
  });
  console.log(show);
  return (
    <Nav className={addClass ? addClass : addClass}>
      <Logo className={addClass ? "sticky" : ""}>portfolio</Logo>
      <NavList className={addClass ? "sticky" : ""}>
        <List
          borderColor={addClass && "#eee"}
          className={add.home && "active"}
          onClick={() => setAdd({ home: true })}
        >
          <Link to='/' className={addClass ? "sticky" : "link"}>
            home
          </Link>
        </List>
        <List
          borderColor={addClass && "#eee"}
          className={add.skill && "active"}
          onClick={() => setAdd({ skill: true })}
        >
          <Link to='/' className={addClass ? "sticky" : "link"}>
            my objective / skills
          </Link>
        </List>
        <List
          borderColor={addClass && "#eee"}
          className={add.portfolio && "active"}
          onClick={() => setAdd({ portfolio: true })}
        >
          <Link to='/' className={addClass ? "sticky" : "link"}>
            portfolio
          </Link>
        </List>
        <List
          borderColor={addClass && "#eee"}
          className={add.contact && "active"}
          onClick={() => setAdd({ contact: true })}
        >
          <Link to='/' className={addClass ? "sticky" : "link"}>
            contact
          </Link>
        </List>
      </NavList>
    </Nav>
  );
};

export default NavBar;
