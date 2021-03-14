import styled from 'styled-components';
import { COLORS } from '../../assets/styles/themes';

export const Piu = styled.div`

    background: #FFFFFC;
    margin: 8px;
    border-radius: 16px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 16px;

    &.fixed{
        order: -1;
    }

    &.fadeout {
        opacity: 0;
        transition: 0.5s;
    }

    @media (max-width: 820px) {

    }
`;

export const ProfilePicture = styled.div`
    height: 100%;
    width: 4.8rem;
    float: left;
    img {
        height: 4.8rem;
        width: 4.8rem;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const PiuContent = styled.div`
    flex-grow: 1;
    margin-left: 16px;
    height: auto;
    max-height: 100%;
    overflow-y:auto;

    @media (max-width: 820px) {

    }

`;

export const PiuHeader = styled.header`

    display: flex;
    justify-content: space-between;

    @media (max-width: 820px) {

    }

`;

export const UserDetails = styled.div`

    display: flex;
    align-items: baseline;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        text-decoration: underline;
        color: #353a3d;
    }

    h3 {
        font-size: 1.4rem;
        letter-spacing: 0;
    }

    p {
        margin-left: 0.8rem;
        color: #667581;
        font-size: 1.4rem;
    }

    @media (max-width: 820px) {

    }

`;

export const EditOptions = styled.div`

    display: flex;
    justify-content: space-between;

    img {
        margin: 0 0.4rem;
        height: 1.6rem;
        cursor: pointer;
        color: #023047;
        transition: 0.2s;
    }

    img:hover {
        filter: opacity(160%);
    }

`;

export const PiuMessage = styled.p`
    line-height: 2.4rem;
    margin-top: 0.8rem;
    margin-right: 1.6rem;
    font-size: 1.4rem;
    word-wrap: break-word;
`;

export const EditPiuTextarea = styled.textarea`
    width: 90%;
    height: fit-content;
    min-height: 4.2rem;
    resize: none;
    font-family: 'Hind', sans-serif;
    letter-spacing: 0.1rem;
    margin-top: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    font-size: 1.4rem;

    display: none;
`;

export const PiuFooter = styled.footer`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 0.8rem;
`;

export const EditPiuInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.8rem;

    visibility: hidden;

    span {
        font-size: 1.4rem;
        color: #667581;
        margin-right: 0.8rem;
        padding-top: 0.2rem;
        width: 4rem;
    }

    button {
        font-size: 1.2rem;
        background: #023047;
        color: #F5FFFF;
        border: none;
        border-radius: 0.8rem;
        padding: 0.6rem 0.6rem;
        font-size: 1.2rem;
        transition: 0.2s;
    }

    button:hover {
        background: #084463;
    }

    a {
        font-size: 1.4rem;
        margin-left: 0.8rem;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        color: #667581;
    }

    p {
        font-size: 1.2rem;
        color:#FF4218;
        margin-left: 0.4rem;
    }
`;

export const InteractionsArea = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Interaction = styled.div`
    display: flex;
    align-items: center;
    margin: 0.8rem 1.6rem 0 0;
    cursor: pointer;
    transition: 0.2s;

    :first-child {
        margin-left: 0;
    }

    img:hover {
        filter: opacity(80%);
    }

    img {
        height: 1.6rem;
        margin-right: 0.6rem;
        margin-bottom: 0.2rem;
        transition: 0.2s;
    }

    a {
        font-size: 1.4rem;
        width: 5rem;
        color: #023047;
    }

    a:hover {
        text-decoration:underline;
    }

`;

