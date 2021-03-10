import styled, { css } from 'styled-components';
import { COLORS } from '../../../assets/styles/themes';


export const Container = styled.div`
    padding: 8px 16px;
    margin-bottom: 16px;
    background-color: ${COLORS.white};
    height: fit-content;
    border-radius: 8px;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
`;


export const InputComponent = styled.div`
    position: relative;
    background-color: ${COLORS.white};

    input {
        padding-top: 26px;
        padding-bottom: 8px;
        border: none;
        height: 34px;
        width: 250px;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
    }

    label {
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        
        text-transform: uppercase;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 1.4rem;
        letter-spacing: 0.25rem;
        color: rgba(0, 0, 0, 0.6);
    }

    span {
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
    }

    input:focus + label span, 
    input:valid + label span{
        transform: translateY(-150%);
        font-size: 0.9rem;
    }

`;
