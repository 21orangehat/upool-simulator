import React from "react";
import styled from "styled-components";
import { useModalContext } from "../context/modal/modalContext";
import SpoolLogo from "../assets/images/upool_logo.png";
import { DangerButton } from "../common/buttons";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: rgb(0, 0, 0, 0.9);
  position: absolute;
  width: 100vw;
  top: 0;
  z-index: 9999;
`;

const Logo = styled.h1`
  color: white;
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > span {
    font-size: 1.4rem;
    margin-right: 7px;
  }
`;

const Menubar = styled.a`
  display: flex;
  align-items: center;

  & a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
    margin-right: 15px;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
const Gitcoin = styled.div`
  position: relative;

  & p {
    font-size: 0.7em;
    color: white;
    margin: 0;
    position: absolute;
    width: 250px;
    right: 0;
    margin-top: 8px;
  }
`;

const Navbar = () => {
  const { dispatch } = useModalContext();

  return (
    <NavbarContainer>
      <Logo>
        <span><img src={SpoolLogo} alt="Simulator Pool" width="45%" />Simulator</span>
      </Logo>
      <Menubar>
      <a href="https://pools.orangehat.wtf" target="_blank" rel="noreferrer">
        <Gitcoin>
          <DangerButton>
            <span>Voltar à listagem de pools</span>
          </DangerButton>
        </Gitcoin>
      </a>
      </Menubar>
    </NavbarContainer>
  );
};

export default Navbar;
