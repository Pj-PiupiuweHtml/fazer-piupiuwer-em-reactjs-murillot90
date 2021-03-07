import styled from 'styled-components';
import { COLORS } from '../../assets/styles/themes';

export const SidebarWrapper = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    position: sticky;
    top: 104px;
    height: fit-content;

    @media (min-width: 820px) {
        display: none;
    }
`;

export const NavigationMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        height: 40px;
        width: 40px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        background: #80C8D5;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    a:last-child {
        background: #023047;
    }

    a img {
        height: 20px;
        width: 20px;
    }
    a:first-child img {
        height: 40px;
        width: 40px;
        border: none;
        border-radius: 50%;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }
`;
