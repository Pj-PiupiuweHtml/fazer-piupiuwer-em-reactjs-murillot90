import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../styles/themes';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0.0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Hind', sans-serif;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;

        background: ${COLORS.primaryBackground};
        color: ${COLORS.blackRegular};

        width: 100vw;
    }

    a {
        text-decoration: none;
    }

    input, 
    button, 
    textarea {
        outline: 0;
    }

    button {
        cursor: pointer;
    }
    
    @media (max-width: 820px) {
        html {
            font-size: 55%;
        }

        body {
            background: ${COLORS.primaryLighter};
        }
    }

`

export const GlobalTypography = createGlobalStyle`
    h1 {
        font-family: 'Poppins', sans-serif;
    }

    h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-size: 3.2rem;
        letter-spacing: 0.1rem;
    }

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 1.7rem;
        letter-spacing: 0.1rem;
    }

    p {
        font-size: 12px;
    }

    button {
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 600;
    }
`

export const StylizedScrollbars = createGlobalStyle`

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${COLORS.primaryDarker};
        border: 0px none ${COLORS.white};
        border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${COLORS.primaryDarker};
    }
    ::-webkit-scrollbar-thumb:active {
        background: ${COLORS.secondaryRegular};
    }
    ::-webkit-scrollbar-track {
        background: ${COLORS.white};
        border: 0px solid ${COLORS.white};
        border-radius: 55px;
    }
    ::-webkit-scrollbar-track:hover {
        background: ${COLORS.primaryLighter};
    }
    ::-webkit-scrollbar-track:active {
        background: ${COLORS.primaryLighter};
    }
    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`