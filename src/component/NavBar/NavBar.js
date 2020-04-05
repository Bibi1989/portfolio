import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Logo, NavList, List } from "./NavBarStyle";

const NavBar = () => {
  const refList = useRef(null);
  const [add, setAdd] = useState({
    home: true,
    skill: false,
    portfolio: false,
    contact: false,
  });
  return (
    <Nav>
      <Logo>portfolio</Logo>
      <NavList>
        <List
          ref={refList}
          className={add.home && "active"}
          onClick={() => setAdd({ home: true })}
        >
          <Link to='/' className='link'>
            home
          </Link>
        </List>
        <List
          className={add.skill && "active"}
          ref={refList}
          onClick={() => setAdd({ skill: true })}
        >
          <Link to='/' className='link'>
            my objective / skills
          </Link>
        </List>
        <List
          className={add.portfolio && "active"}
          ref={refList}
          onClick={() => setAdd({ portfolio: true })}
        >
          <Link to='/' className='link'>
            portfolio
          </Link>
        </List>
        <List
          className={add.contact && "active"}
          ref={refList}
          onClick={() => setAdd({ contact: true })}
        >
          <Link to='/' className='link'>
            contact
          </Link>
        </List>
      </NavList>
    </Nav>
  );
};

export default NavBar;
