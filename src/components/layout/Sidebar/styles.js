import styled from 'styled-components';
import { FaChevronDown, FaPlus } from 'react-icons/fa';
import { theme } from '../../../constants';

export const Bar = styled.div`
    box-sizing: border-box;
    width: 305px;
    height: calc(100vh - 44px);
    margin-top: 44px;
    padding-top: 35px;
    padding-left: 35px;
    position: fixed;
    left: 0;
    top: 0;
    transition: left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : theme.colors.sideBarBg)};
    z-index: 199;

    &:nth-child(3) {
        &:hover {
            opacity: 0.6;
        }
    }
`;

export const List = styled.ul`
    margin: 0;
    padding: 0;
`;

export const Icon = styled.div`
    width: 28px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-top: -1px;
    font-size: 14px;
`;

export const AddProjectButton = styled(FaPlus)`
    height: 15px;
    width: 15px;
    position: absolute;
    right: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;

export const CaretIcon = styled(FaChevronDown)`
    margin: 0.75rem;
    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform: ${(props) => (props.active ? 'none' : 'rotate(-90deg)')};
`;

export const Item = styled.li`
    min-height: 24px;
    font-size: 14px;
    list-style: none;
    cursor: pointer;
    padding: 5px 16px 5px 5px;
    transition: color 0.1s ease-in, background-color 0.1s ease-in;
    background: ${(props) =>
        props.active && props.darkMode
            ? '#363636'
            : props.active && !props.darkMode
            ? '#fff'
            : 'inherit'};
    line-height: 1.25;
    display: flex;
    border-radius: 3px;
    align-items: center;

    &:hover {
        background: ${(props) => (props.darkMode ? '#363636' : '#fff')};
    }
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    border-color: ${(props) =>
        props.darkMode ? theme.colors.darkModeBorder : theme.colors.border};

    h2 {
        font-size: 14px;
    }

    &:hover {
        background: ${(props) => (props.darkMode ? 'inherit' : '#f7f7f7')};
        cursor: pointer;
    }
`;

export const ProjectsList = styled.ul`
    list-style: none;
`;

export const ProjectsWrapper = styled.div`
    min-height: 0;
    transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    height: ${(props) => (props.active ? 'auto' : 0)};
    overflow: ${(props) => (props.active ? 'visible' : 'hidden')};
`;
