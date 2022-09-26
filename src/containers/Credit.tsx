import React from "react";
import styled from "styled-components";

const CreditContainer = styled.div`
  padding: 10px 15px;
  text-align: center;
  color: #bbb;
  font-size: 0.8rem;

  & svg {
    color: rgb(247, 2, 119);
  }

  & a {
    color: rgb(30, 161, 241);
    font-weight: bold;
    text-decoration: none;
  }

  & > div:nth-child(2) {
    margin-top: 7px;

    & > a {
      color: #777;
      margin: 0 7px;
    }
  }
`;

const Credit = () => {
  return (
    <CreditContainer>
      <div>
        Desenvolvido por {" "} 
        <a href="https://github.com/21orangehat/upool-simulator" target="_blank" rel="noreferrer">
              Orange Hat
        </a>
         com base no projeto original de {" "}
        <a href="https://github.com/chunza2542/uniswap.fish" 
          target="_blank"
          rel="noreferrer">
          @chunza2542
        </a>
      </div>
    </CreditContainer>
  );
};

export default Credit;
