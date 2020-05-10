import styled from 'styled-components';
import { theme } from '../../constants';

export const ProjectList = styled.ul`
    list-style: none;
    padding: 0;
    border-collapse: collapse;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0;
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};

    &::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: ${(props) => (props.darkMode ? '#171717' : 'inherit')};
        border-radius: 1rem;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
        width: 15px;
        border-radius: 1rem;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
    }
`;

export const Color = styled.div`
    background: ${(props) => props.color || '#000'};
    border-radius: 50%;
    margin: 7px;
    margin-right: 17px;
    height: 10px;
    width: 10px;
`;

export const Container = styled.div`
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};
    width: 275px;
    bottom: -54px;
    z-index: 99999;
    position: absolute;
    right: 0;
    min-height: inherit;
    padding: 0;
    border-radius: 5px;
    border: ${(props) => (props.darkMode ? 'none' : '1px solid rgba(0, 0, 0, 0.1)')};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    outline: none;
`;
