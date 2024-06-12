import React, { useState } from "react";
import {
  Container,
  NavbarWrapper,
  NavbarBrand,
  NavbarToggle,
  ToggleIcon,
  NavbarList,
  NavbarItem,
} from "./Navbar.styled";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Container>
      <NavbarWrapper>
        <div>
          <NavbarBrand>MORE | Movie Review</NavbarBrand>
        </div>
        <NavbarToggle onClick={toggleNav}>
          <ToggleIcon $isOpen={isNavOpen} />
          <ToggleIcon $isOpen={isNavOpen} />
          <ToggleIcon $isOpen={isNavOpen} />
        </NavbarToggle>
        <NavbarList $isOpen={isNavOpen}>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/page/create">Add Movie</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/page/popular">Popular</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/page/now">Now Playing</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/page/top">Top Rated</Link>
          </NavbarItem>
        </NavbarList>
      </NavbarWrapper>
    </Container>
  );
}

export default Navbar;
