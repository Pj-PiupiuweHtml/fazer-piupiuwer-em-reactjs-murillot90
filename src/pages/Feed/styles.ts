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