import styled from "styled-components";

export const Nav = styled.nav`
  width: 80%;
  padding: 0px 2%;
  background: ${(props) => (props.background ? props.background : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 15px #999;
  border-radius: 0.25em;
  position: fixed;
  left: 10%;
  right: 10%;
  z-index: 20;
  top: 2%;
  transition: all 0.6s ease-in-out;

  &.nav-dark {
    background: #444;
    width: 100%;
    border-radius: 0;
    left: 0;
    right: 0;
    top: 0;
    transition: all 0.6s ease-in-out;
    color: #eee;
  }
  .show {
    background: #444;
    width: 100%;
    transition: all 0.6s ease-in-out;
    color: #eee;
  }

  @media (max-width: 768px) {
    &.nav-dark {
      display: none;
    }
  }
`;

export const Logo = styled.h3`
  color: #444;
  text-transform: uppercase;
  align-self: center;
  margin: 0;
  padding: 1em;

  &.sticky {
    color: #eee;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  &:last-child {
    padding-left: 0;
  }

  .link {
    display: block;
    text-transform: uppercase;
    color: #444;
  }

  .sticky {
    display: block;
    text-transform: uppercase;
    color: #eee;
  }

  @media (max-width: 768px) {
    &.nav,
    &.nav-dark {
      display: none;
    }
  }
`;

export const List = styled.li`
  padding: 1em 2.5em;

  &.active {
    border-bottom: ${(props) =>
      props.borderColor ? "2px solid #eee" : "2px solid #444"};
    transition: all 0.5s ease-in-out;
  }

  .sticky {
    display: block;
    text-transform: uppercase;
    color: #eee;
  }
`;

// export const Logo = styled.h3`
//   color: #eee;
//   text-transform: uppercase;
// `;

// export const Logo = styled.h3`
//   color: #eee;
//   text-transform: uppercase;
// `;
