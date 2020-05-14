import styled from 'styled-components';
import { theme } from '../../constants';

export const TasksList = styled.ul``;

export const Container = styled.div`
    width: calc(100% - 305px);
    background: ${(props) => (props.darkMode ? '#1f1f1f' : '#fff')};
    color: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
    min-height: calc(100vh);
    vertical-align: top;
    padding: 80px 55px 84px 55px;
    transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 305px;

    h2 {
        font-size: 20px;
    }

    h2 small {
        color: grey;
        margin-left: 6px;
        font-size: 11px;
        font-weight: 400;
    }
`;

export const Task = styled.li`
    display: flex;
    line-height: 18px;
    color: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
    padding: 10px;
    font-size: 14px;
    list-style-type: none;
    border-bottom: 1px solid
        ${(props) => (props.darkMode ? theme.colors.darkModeBorder : theme.colors.border)};
`;
