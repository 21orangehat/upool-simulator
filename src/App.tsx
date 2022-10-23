import React from "react";
import styled from "styled-components";
import { Br } from "./common/atomic";
import CorrelationChart from "./containers/CorrelationChart";
import EstimatedFees from "./containers/EstimatedFees";
import Header from "./containers/Header";
import LiquidityPositionChart from "./containers/LiquidityPositionChart";
import SelectPairModal from "./containers/select-pair/SelectPairModal";
import Setting from "./containers/setting/Setting";
import { ScreenWidth } from "./utils/styled";
import SugestaoRange from "./containers/setting/SugestaoRange";
import Credito from "./containers/Credito";
import Navbarra from "./containers/Navbarra";

const BodyContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding-top: 100px;

  @media only screen and (max-width: ${ScreenWidth.TABLET}px) {
    margin: auto 15px;
    padding-top: 85px;
  }
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-gap: 25px;
  margin-top: 25px;

  @media only screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;

function App() {
  return (
    <>
      <SelectPairModal />
      <Navbarra />
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
        <Credito />
      </BodyContainer>
    </>
  );
}

export default App;
