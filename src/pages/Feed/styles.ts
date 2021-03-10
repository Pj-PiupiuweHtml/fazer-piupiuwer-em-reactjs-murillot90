import styled from 'styled-components';
import { COLORS } from '../../assets/styles/themes';

export const ContentWrapper = styled.div`
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    margin: 0 auto;
    margin-top: 104px;
    width: 90%;
    max-width: 980px;
`;

export const FeedContent = styled.main`
    grid-column-start: 5;
    grid-column-end: 13;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media (max-width: 820px) {
        grid-column-start: 3;
        grid-column-end: 13;
    }
`;

export const PiarInputArea = styled.div`
    
    background: #80C8D5;
    border-radius: 1.6rem;
    padding: 1.6rem 3.2rem;
    display: flex;
    box-shadow: 0px 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
    margin-bottom: 1.6rem;

    img {
        height: 6.4rem;
        border-radius: 50%;
        cursor: pointer;
    }

    @media (max-width: 820px) {

        padding: 0;
        visibility: hidden;

        > img {
            display: none;
        }
    }
`;

export const PiarInput = styled.div`
    
    width: 100%;
    height: 11.0rem;
    position: relative;
    margin-left: 1.6rem;
    
    textarea {
        border-radius: 1.6rem;
        border-width: 1.6rem 1.6rem 4.8rem;
        border-color: white;
        box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.25);
        height: 100%;
        width: 100%;
        resize: none;
        font-family: 'Hind', sans-serif;
        letter-spacing: 0.1rem;
    }

    @media (max-width: 820px) {
        visibility: visible;
        margin: 0;
        width: 100%;
        height: auto;
    }
`;

export const PiarInputWarning = styled.div`
    position: absolute;
    bottom: 0.8rem;
    left: 1.6rem;
    font-size: 1.4rem;
    color: #FF4218;
`;

export const PiarInputFooter = styled.div`
    
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    bottom: 0.8rem;
    right: 1.6rem;
    
    span {
        font-size: 1.4rem;
        color: #667581;
        margin-right: 1.2rem;
        padding-top: 0.2rem;
    }

    button {
        background: #023047;
        color: #F5FFFF;
        display: flex;
        justify-content: left;
        align-items: center;
        border: none;
        border-radius: 0.8rem;
        padding: 0.8rem 0.8rem;
        font-size: 1.2rem;
        transition: 0.2s;
    }

    button:hover {
        background: #084463;
    }

    button img {
        border-radius: 0;
        height: 1.6rem;
        margin-right: 0.8rem;
    }
`;

export const PiusSection = styled.div`
    display: flex;
    flex-direction: column;
    `;

export const UnsuccessfulSearchTag = styled.h3`
    text-align: center;
    margin: 3.2rem;

    display: none;
`;