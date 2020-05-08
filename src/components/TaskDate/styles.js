import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    bottom: -92px;
    right: 0;
    z-index: 99999;
    position: absolute;
    min-height: inherit;
    padding: 0;
    background: #fff;
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
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 0;
`;

export const ListItem = styled.li`
    font-size: 13px;
    color: #202020;
    cursor: pointer;
    padding: 2.5px 0;
    margin: 0 10px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #f9f9f9;
    }
`;

export const IconContainer = styled.span`
    margin: 7px;
`;
