import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../assets/styles/themes';

const deadBirdBounce = keyframes`
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(12deg);
    }

    50% {
        transform: rotate(0deg);
    }

    75% {
        transform: rotate(-12deg);
    }

    100% {
        transform: rotate(0deg);
    }
`;

const birdAboutToDieBecauseEverythingThatLivesDiesAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    5% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${COLORS.primaryLighter};
    padding: 0 8rem;
    overflow-y: hidden;

    @media (max-width: 950px) {
        padding: 0 5%;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;

    @media (max-width: 740px) {
        flex-direction: column;
    }
`;


export const Logo = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    color: ${COLORS.secondaryDark};

    h1 { 
        margin-bottom: 2.4rem;
        font-size: 4.8rem;
    }

    img {
        margin-bottom: 2.4rem;
        height: 9.6rem;
        animation: ${birdAboutToDieBecauseEverythingThatLivesDiesAnimation} 
                    10s linear infinite;
    }

    h3 { 
        font-size: 2.0rem;
    }

    @media (max-width: 740px) {
        flex-direction: row;
        h1 {font-size: 4.0rem;
            margin-right: 2.4rem}
        img {height: 5.6rem}
        h3 {display: none}
    }

`;

export const LoginArea = styled.div`
    background-color: ${COLORS.primaryRegular};
    height: fit-content;
    width: fit-content;
    padding: 4.8rem; 
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    align-items:center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    @media (max-width: 500px) {
        transform: scale(0.9);
    }
`;

export const LoginHeader = styled.div`
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 90%;
    margin-bottom: 3.6rem;

    h1 {
        font-size: 3.6rem;
        color: ${COLORS.secondaryDark};
        position: relative;
    }

    h1::after {
        content:' ';
        display:block;
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 35%;
        border: 2px solid ${COLORS.secondaryDark};
    }

    img {
        height: 4.8rem;
        width: 4.8rem;
        animation: ${deadBirdBounce} 2s linear infinite;
    }
`;

export const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;

    a {
        color: ${COLORS.blackClickable}
    }

`;

export const InputArea = styled.div`
    margin-bottom: 4.8rem;
`;

export const WarningText = styled.p`
    margin-bottom: 4px;
    color: ${COLORS.auxiliaryRed};
    font-size: 1.2rem;
    height: 2.4rem;
`;

export const ButtonArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    p, a {
        margin-top: 8px;

    }
`;

