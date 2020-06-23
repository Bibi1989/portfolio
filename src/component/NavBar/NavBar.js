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
  return (
    <Nav className={addClass ? addClass : addClass} data-aos='flip-right'>
      <Logo className={addClass ? "sticky" : ""}>bibirinbulu aremieye</Logo>
      <NavList className={addClass ? "sticky" : "nav"}>
        <a href='#home' className={addClass ? "sticky" : "link"}>
          <List
            borderColor={addClass && "#eee"}
            className={add.home && "active"}
            onClick={() => setAdd({ home: true })}
          >
            home
          </List>
        </a>
        <a href='#skill' className={addClass ? "sticky" : "link"}>
          <List
            borderColor={addClass && "#eee"}
            className={add.skill && "active"}
            onClick={() => setAdd({ skill: true })}
          >
            skills
          </List>
        </a>
        <a href='#portfolio' className={addClass ? "sticky" : "link"}>
          <List
            borderColor={addClass && "#eee"}
            className={add.portfolio && "active"}
            onClick={() => setAdd({ portfolio: true })}
          >
            portfolio
          </List>
        </a>
        <a href='#experience' className={addClass ? "sticky" : "link"}>
          <List
            borderColor={addClass && "#eee"}
            className={add.contact && "active"}
            onClick={() => setAdd({ contact: true })}
          >
            Experience
          </List>
        </a>
      </NavList>
    </Nav>
  );
};

export default NavBar;
