import styled from 'styled-components';
import { COLORS } from '../../assets/styles/themes';

export const SidebarWrapper = styled.div`

    grid-column-start: 1;
    grid-column-end: 5;
    min-width: 190px;
    position: sticky;
    top: 104px;
    height: fit-content;

    @media (max-width: 820px) {
        display: none;
    }
`;

export const UserSummary = styled.div`
    display: flex;
    padding: 8px 12px 8px;
    border-radius: 8px;
    cursor: pointer;
    width: fit-content;
    transition: 0.2s;

    :hover {
        background: #D9EFF1;
    }

    img {
        border-radius: 50%;
        height: 44px;
        width: 44px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }
`;

export const UserSummaryTexts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 16px;
    
    h3 {
        font-size: 12px;
    }

    p {
        font-size: 12px;
        color: #8097A2;
    }
`;

export const NavigationMenu = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    a {
        width: 190px;
        background: #B3DEE4;
        display: flex;
        justify-content: left;
        align-items: center;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        margin: 4px 0;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        color: #023047;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        filter: brightness(95%);
    }

    a:last-child {
        background: #023047;
        color: #F5FFFF;
        margin-top: 12px;
        width: fit-content;
    }

    a:last-child:hover {
        background: #084463;
    }

    a img {
        height: 20px;
        width: 20px;
        margin-right: 8px;
    }
`;
