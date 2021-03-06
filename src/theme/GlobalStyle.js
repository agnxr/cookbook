import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; /* happy rems: 1 rem === 10px */
    }

    body {
        font-size: 1.6rem; /* 16px */
        font-family: 'Open Sans', sans-serif;
        background-color: #ddd;
        /* sidebar */
        padding-left: 150px; /* sidebar width */
    }
`;

export default GlobalStyle;
