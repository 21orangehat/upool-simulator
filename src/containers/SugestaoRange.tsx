import React from 'react';
import { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/app/appContext";
import { AppActionType } from "../context/app/appReducer";
import { divideArray, findMax, findMin } from "../utils/math";
import { Heading } from "../common/atomic";

const SettingContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 16px;
`;

const Table = styled.table`
  color: white;
  width: 100%;
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  thead tr {
    background-color: rgb(37, 175, 96);
    color: #ffffff;
    text-align: center;
  }
  tbody td {
    text-align: center;
  }
`;

const SugestaoRange = () => {
  const { state, dispatch } = useAppContext();

  const prices = divideArray(
    (state.token1PriceChart?.prices || []).map((p) => p.value),
    (state.token0PriceChart?.prices || []).map((p) => p.value)
  );

  const currentPrice = Number(state.pool?.token0Price || NaN);
  let _min = findMin(prices);
  let _max = findMax(prices);

  if (state.token0PriceChart === null || state.token1PriceChart === null) {
    _min = currentPrice - currentPrice * 0.3;
    _max = currentPrice + currentPrice * 0.3;
  }

  let preco_atual: number = state.priceAssumptionValue;

  // Perfis
  let p1: number = preco_atual * 0.01;  // 1% Degenerado
  let p25: number = preco_atual * 0.025; // 2.5% Arrojado
  let p5: number = preco_atual * 0.05;  // 5% Moderado
  let p10: number = preco_atual * 0.10; //10% Conservador

  // Degenerado p1
  let dmin: number = preco_atual - p1;
  let dmax: number = preco_atual + p1;

  // Arrojado p25
  let amin: number = preco_atual - p25;
  let amax: number = preco_atual + p25;

  // Moderado p5
  let mmin: number = preco_atual - p5;
  let mmax: number = preco_atual + p5;

  // Conservador p10
  let cmin: number = preco_atual - p10;
  let cmax: number = preco_atual + p10;

  useEffect(() => {
    if (Number.isNaN(currentPrice)) return;

    dispatch({
      type: AppActionType.UPDATE_PRICE_ASSUMPTION_VALUE,
      payload: currentPrice,
    });
    dispatch({
      type: AppActionType.UPDATE_PRICE_RANGE,
      payload: [_min, _max],
    });
    // eslint-disable-next-line
  }, [state.pool]);

  return (
    <SettingContainer>
    <Table>
      <caption>Tabela sugerida de ranges de acordo com o preço atual ({(preco_atual).toFixed(5) || 0})</caption>
      <thead>
        <tr>
          <th>Range</th>
          <th
          onClick={() => {
            dispatch({
              type: AppActionType.UPDATE_PRICE_RANGE,
              payload: [
                dmin,
                dmax,
              ],
            });
          }}
          >Degenerado 1%</th>
          <th
          onClick={() => {
            dispatch({
              type: AppActionType.UPDATE_PRICE_RANGE,
              payload: [
                amin,
                amax,
              ],
            });
          }}
          >Arrojado 2.5%</th>
          <th
          onClick={() => {
            dispatch({
              type: AppActionType.UPDATE_PRICE_RANGE,
              payload: [
                mmin,
                mmax,
              ],
            });
          }}
          >Moderado 5%</th>
          <th
          onClick={() => {
            dispatch({
              type: AppActionType.UPDATE_PRICE_RANGE,
              payload: [
                cmin,
                cmax,
              ],
            });
          }}
          >Conservador 10%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mínimo</td>
          <td>{dmin.toFixed(5)}</td>
          <td>{amin.toFixed(5)}</td>
          <td>{mmin.toFixed(5)}</td>
          <td>{cmin.toFixed(5)}</td>
        </tr>
        <tr>
          <td>Máximo</td>
          <td>{dmax.toFixed(5)}</td>
          <td>{amax.toFixed(5)}</td>
          <td>{mmax.toFixed(5)}</td>
          <td>{cmax.toFixed(5)}</td>
        </tr>
      </tbody>
    </Table>
    </SettingContainer>
  );
};

export default SugestaoRange;
