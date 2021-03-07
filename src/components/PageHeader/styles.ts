import styled from 'styled-components';
import { COLORS } from '../../assets/styles/themes';


export const Header = styled.header`
    height: 80px;
    background-color: ${COLORS.primaryLight};
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    padding-right: 16px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 980px;
    margin: 0 auto;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center; 
    height: 100%;
    cursor: pointer;
    padding:  8px 16px;
    border-radius: 8px;
    transition: 0.2s;

    :hover {
        background: rgba(255, 255, 255, 0.5);
    }

    img {
        height: 32px;
        margin-right: 24px;
    }

    h2 {
        color: ${COLORS.secondaryDark};
        font-size: 24px;
    }

    h2::selection {
        color: ${COLORS.white};
        background: ${COLORS.primaryDarker};
    }
`;

export const SideOptions = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 300px;
        border: 1px solid ${COLORS.white};
        height: 40px;
        padding: 0 32px 0 12px;
        margin: 24px;
        border-radius: 12px;
        color: #667581;
        font-size: 13px;
        background: ${COLORS.white} url('../images/search-solid.svg') no-repeat 268px center;
        background-size: 16px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        font-family: 'Hind', sans-serif;
    }

    input::placeholder {
        font-family: 'Hind', sans-serif;
    }

    input:focus {
        border: 1px solid #a3b9ca;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        height: 44px;
        width: 44px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
    }

    button:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    button img {
        height: 24px;
    }

`;


