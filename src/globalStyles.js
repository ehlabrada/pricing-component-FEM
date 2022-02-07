import styled, { createGlobalStyle } from "styled-components";
import svgTop from './images/bg-top.svg'
import svgBottom from './images/bg-bottom.svg'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  /* font-family: 'Space Mono', monospace; */
  font-size: 15px;
}

  body {
    background: #cce6f3;
    width: 100%;
    /* max-width: 1200px; */
    min-height: 100vh;
    /* background: url(svgTop) top right no-repeat, url(svgBottom) left bottom no-repeat; */

    /* Flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }



`


















export default GlobalStyle