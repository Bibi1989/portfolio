import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, NavList, List } from "./NavBarStyle";

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
    <Nav className={addClass ? addClass : addClass} data-aos='flip-right'>
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
          <a href='#skill' className={addClass ? "sticky" : "link"}>
            my objective / skills
          </a>
        </List>
        <List
          borderColor={addClass && "#eee"}
          className={add.portfolio && "active"}
          onClick={() => setAdd({ portfolio: true })}
        >
          <a href='#portfolio' className={addClass ? "sticky" : "link"}>
            portfolio
          </a>
        </List>
        <List
          borderColor={addClass && "#eee"}
          className={add.contact && "active"}
          onClick={() => setAdd({ contact: true })}
        >
          <a href='#experience' className={addClass ? "sticky" : "link"}>
            Experience/Education
          </a>
        </List>
      </NavList>
    </Nav>
  );
};

export default NavBar;
