import styled from 'styled-components';
import { Listbox, ListboxOption } from '@reach/listbox';
import { FaCheck } from 'react-icons/fa';
import { theme } from '../../constants';

export const Container = styled.div`
    padding: 10px 0 5px 11px;
`;

export const Button = styled.button`
    font-weight: 700;
    font-size: 13px;
    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: #202020;
    padding: 6px 12px 7px;
    cursor: pointer;
    outline: none;
    border-radius: 3px;

    &:disabled {
        opacity: 0.3;
    }
`;

export const AddButton = styled(Button)`
    margin-left: 7px;
    background-color: #db4c3f;
    border: 1px solid transparent;
    color: #fff;

    &:hover {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    }
`;

export const CancelButton = styled(Button)`
    line-height: 17px;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff;
    white-space: nowrap;
    background: linear-gradient(linear, 0 40%, 0 70%, from(#f3f3f3), to(#f1f1f1));
    border-radius: 3px;
    text-decoration: none;
`;

export const AddIcon = styled.div`
    border-radius: 50%;
    color: #dd4b39;
    margin-right: 11px;
    transition: 0.3s all ease;
    padding: 2px;
    height: 19px;
    width: 19px;

    svg {
        width: 15px;
        height: 15px;
    }
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

export const ItemColor = styled.div`
    background: ${(props) => props.color};
    height: 12px;
    width: 12px;
    margin: 0 1rem;
    margin-left: 0.5rem;
    border-radius: 50%;
`;

export const ProjectColor = styled.div`
    position: absolute;
    top: 49px;
    left: 15px;
    background: ${(props) => props.color};
    height: 12px;
    width: 12px;
    margin: 0 1rem;
    display: inline-block;
    border-radius: 50%;
`;

export const ProjectColors = styled(Listbox)`
    margin-top: 10px;
    cursor: pointer;
    outline: none;
    border-radius: 5px;

    [data-reach-listbox-button] {
        height: 30px;
        width: 100%;
        font-size: 14px;
        border-radius: 5px;
        border: 1px solid ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
        background-color: ${(props) => (props.darkMode ? theme.colors.bgDarker : '#fff')};
        padding: 5px;
        padding-left: 40px;
        font-weight: normal;
    }

    [data-reach-listbox-arrow] {
        display: none;
    }
`;

export const ColorOption = styled(ListboxOption)`
    cursor: pointer;
    position: relative;
    color: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
    background-color: ${(props) => (props.darkMode ? theme.colors.bgDarker : '#fff')};
    display: flex;
    align-items: center;
    font-size: 13px;
    padding: 0.5rem;

    &:hover {
        background-color: ${(props) => (props.darkMode ? '#363636' : '#f9f9f9')};
        color: ${(props) =>
            props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary};
    }
`;

export const Checkmark = styled(FaCheck)`
    position: absolute;
    right: 10px;
    display: ${(props) => (props.active ? 'block' : 'none')};
    height: 10px;
    width: 10px;
    fill: ${(props) => (props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary)};
`;
