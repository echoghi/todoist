import styled from 'styled-components';
import { theme } from '../../constants';

export const Container = styled.div`
    bottom: -92px;
    right: 0;
    z-index: 99999;
    position: absolute;
    min-height: inherit;
    padding: 0;
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};
    width: 250px;
    border-radius: 3px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
`;

export const TaskDateList = styled.ul`
    list-style: none;
    padding: 0;
    border-collapse: collapse;
    max-height: 300px;
    overflow: hidden;
    margin: 0;
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};
`;

export const IconContainer = styled.span`
    margin: 7px;
`;
