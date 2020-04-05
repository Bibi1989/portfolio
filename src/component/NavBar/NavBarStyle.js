import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0 10%;
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h3`
  color: #eee;
  text-transform: uppercase;
  align-self: center;
  margin: 0;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  &:last-child {
    padding-left: 0;
  }
`;

export const List = styled.li`
  padding: 2em 2.5em;

  &.active {
    border-bottom: 2px solid #eee;
    transition: all 0.5s ease-in-out;
  }

  .link {
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
