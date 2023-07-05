import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
    }
    body {
        width: 100%;
        overflow-x: hidden;
    }
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 26px;
    }
`

export default GlobalStyle;