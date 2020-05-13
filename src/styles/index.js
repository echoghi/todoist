import styled from 'styled-components';
import { theme } from '../constants';

export const Input = styled.input`
    display: block;
    margin-top: 10px;
    font-size: 14px;
    border-radius: 5px;
    color: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
    border: 1px solid ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDarker : '#fff')};
    padding: 5px;
    width: 100%;
`;

export const Label = styled.label`
    padding: 1rem 24px;
    font-size: 14px;
    font-weight: 700;
    display: block;
    position: relative;
`;

export const Button = styled.button`
    font-weight: 700;
    font-size: 13px;
    background: ${(props) => (props.darkMode ? '#353535' : '#f3f3f3')};
    border: ${(props) => (props.darkMode ? 'none' : '1px solid #ddd')};
    border-radius: 3px;
    color: ${(props) => (props.darkMode ? '#eee' : theme.colors.textPrimary)};
    padding: 6px 12px 7px;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    transition: all 0.2s ease-in;

    &:hover {
        box-shadow: ${(props) => (props.darkMode ? '0 1px 2px rgba(0, 0, 0, 0.15)' : 'none')};
    }

    &:disabled {
        opacity: 0.3;
    }
`;

export const AddButton = styled(Button)`
    margin-left: 7px;
    background-color: ${theme.colors.red};
    border: 1px solid transparent;
    color: #fff;

    &:disabled {
        opacity: 0.3;
    }
`;

export const CancelButton = styled(Button)`
    line-height: 17px;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 3px;
    text-decoration: none;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    cursor: pointer;

    span {
        color: grey;
        font-size: 14px;
    }

    &:hover {
        span {
            color: #dd4b39;
        }

        div {
            color: #fff;
            background: #dd4b39;
        }
    }
`;

export const ModalHeader = styled.header`
    position: relative;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
    background: ${(props) => (props.darkMode ? theme.colors.bgDarker : '#fff')};

    h1 {
        font-size: 16px;
        margin: 5px 0;
    }
`;

export const ModalActions = styled.footer`
    display: flex;
    justify-content: flex-end;
    padding: 12px 24px;
    background-color: inherit;
    border-top: 1px solid ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

export const ListItem = styled.li`
    font-size: 13px;
    color: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
    cursor: pointer;
    padding: 4px 0;
    margin: 0 10px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${(props) => (props.darkMode ? '#363636' : '#f9f9f9')};
    }
`;
