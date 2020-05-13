import styled from 'styled-components';
import { Label as BaseLabel } from '../../styles';

export const Container = styled.div`
    background-color: ${(props) => (props.checked ? '#dd4b39' : '#555')};
    position: relative;
    display: inline-block;
    overflow: visible;
    margin-right: 10px;
    width: 40px;
    height: 18px;
    min-height: auto;
    border-radius: 9px;
    cursor: pointer;
    flex-shrink: 0;
`;

export const Input = styled.input`
    color: #eee;
    border-color: #333;
    background-color: #202020;
    position: absolute;
    opacity: 0;
`;

export const Handle = styled.span`
    position: absolute;
    display: block;
    padding: 0;
    top: 3px;
    left: ${(props) => (props.checked ? '25px' : '3px')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Label = styled(BaseLabel)`
    display: flex;
    align-items: center;
    font-weight: normal;
    cursor: pointer;
`;
