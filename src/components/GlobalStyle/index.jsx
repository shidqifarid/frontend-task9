import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #F2F3F3;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    a {
    font-weight: 500;
    color: #FA320A;
    text-decoration: inherit;
    }
    a:hover {
    color: #FA320A;
    }

    body {
    margin: 0;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    }

    h1 {
    font-size: 3.2em;
    line-height: 1.1;
    }

    button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    }
    button:hover {
    border-color: #FA320A;
    }
    button:focus,
    button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
    :root {
        color: #FA320A;
        background-color: #ffffff;
    }
    a:hover {
        color: #FA320A;
    }
    button {
        background-color: #f9f9f9;
    }
    }
`;

export default GlobalStyle;
