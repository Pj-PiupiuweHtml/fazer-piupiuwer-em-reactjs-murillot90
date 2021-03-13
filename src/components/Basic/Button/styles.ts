import styled, { css } from 'styled-components';
import { COLORS } from '../../../assets/styles/themes';

interface ButtonComponentProps {
    variant: string;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
    display: flex;
    justify-content: left;
    align-items: center;
    border: none;
    border-radius: 0.8rem;
    padding: 1.2rem 4rem;
    font-size: 1.6rem;
    font-weight: 600;
    transition: 0.2s;

    ${props => 
        props.variant == "CTA" && 
        css`
            background: ${COLORS.secondaryDark};
            color: ${COLORS.white};
        `
    };

    ${props => 
        props.variant == "Regular" && 
        css`
            background: ${(COLORS.primaryLight)};
            color: ${COLORS.secondaryDark};

            :hover {
                background-color: red;
            }
        `
    };

    :hover {
        opacity: 0.9;
    }

    img {
        border-radius: 0;
        height: 1.6rem;
        margin-right: 0.8rem;
    }


`;
