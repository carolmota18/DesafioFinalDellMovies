import React from "react";
import Header from "./Componentes/Header.js";
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export default function App() {
  return (
    <div>
      <GlobalStyled />
      <Header />
    </div>
  );
}
