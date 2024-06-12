import styled from "styled-components";

export const Container = styled.div`
  background-color: #fa320a;
  color: #fff;
`;

export const NavbarWrapper = styled.nav`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: unset;
  }
`;

export const NavbarBrand = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const NavbarToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const ToggleIcon = styled.div`
  width: 30px;
  height: 4px;
  background-color: #fff;
  margin: 6px 0;
  transition: all 0.3s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    &:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 5px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  `}
`;

export const NavbarList = styled.ul`
  display: none;
  flex-direction: column;
  list-style: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 767px) {
    ${({ $isOpen }) =>
      $isOpen &&
      `
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80%;
      left: 0;
      width: 100%;
      background-color: #fa320a;
      padding: 1rem;
      transition: all 0.3s ease-in-out;
    `}
  }
`;

export const NavbarItem = styled.li`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #ddd;
    }
  }
`;
