import React from "react";
import styled from "styled-components";
import { useWindowWidth } from "@react-hook/window-size";
import { Br } from "./common/atomic";
import CorrelationChart from "./containers/CorrelationChart";
import Credit from "./containers/Credit";
import EstimatedFees from "./containers/EstimatedFees";
import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import LiquidityPositionChart from "./containers/LiquidityPositionChart";
import SelectPairModal from "./containers/select-pair/SelectPairModal";
import Setting from "./containers/setting/Setting";
import ContextProvider from "./context/ContextProvider";
import { PrimaryBlockButton } from "./common/buttons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import DonateModal from "./containers/DonateModal";
import { useAppContext } from "./context/app/appContext";
import SpoolLogo from "./assets/images/upool_logo.png";
import SugestaoRange from "./containers/setting/SugestaoRange";

const BodyContainer = styled.div`
  width: 900px;
  margin: auto auto;
  padding-top: 100px;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-gap: 25px;
  margin-top: 25px;
`;
const MobileNotSupportScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  text-align: center;

  color: white;

  & > h1 {
    margin: 0;
    font-size: 1.2rem;
  }
  & > p {
    color: #ccc;
    font-size: 1rem;
  }
`;
const EnterSite = styled.div`
  margin-top: 15px;
  width: calc(100vw - 30px);
`;
const Unicorn = styled.div`
  font-size: 5rem;
`;
const IconBar = styled.div`
  font-size: 1.2rem;
  margin-top: 30px;

  & > a {
    color: #777;
    margin: 0 10px;
  }
`;

function App() {
  const screenWidth = useWindowWidth();
  const [isEnter, setIsEnter] = useState(false);

  return (
    <ContextProvider>
      {!isEnter && screenWidth <= 960 && (
        <MobileNotSupportScreen>
          <Unicorn>
            <img src={SpoolLogo} alt="Simulator Pool" width="45%" />
          </Unicorn>
          <h1>Bem-vindo(a) ao uPool Calculator</h1>
          <p>
            Para uma melhor experiência, por favor, utilize
            um computador ao invés de um smartphone ou tablet
          </p>
          <EnterSite>
            <PrimaryBlockButton onClick={() => setIsEnter(true)}>
              Eu compreendo, vamos simular!
            </PrimaryBlockButton>
          </EnterSite>
        </MobileNotSupportScreen>
      )}
      {(isEnter || screenWidth > 960) && (
        <>
          <SelectPairModal />
          {/* <DonateModal /> */}
          <Navbar />
          <BodyContainer>
            <Header />
            <ContentContainer>
              <div>
                <EstimatedFees />
                <Br />
                <Setting />
              </div>
              <div>
                <LiquidityPositionChart />
                <Br />
                <CorrelationChart />
              </div>
            </ContentContainer>
            <Br />
            <SugestaoRange />
            <Credit />
          </BodyContainer>
        </>
      )}
    </ContextProvider>
  );
}

export default App;
