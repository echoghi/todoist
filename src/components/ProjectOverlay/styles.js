import styled from 'styled-components';

export const ProjectList = styled.ul`
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
    padding: 4px 0;
    margin: 0 10px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #f9f9f9;
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
    background-color: #fff;
    width: 275px;
    bottom: -54px;
    z-index: 99999;
    position: absolute;
    right: 0;
    min-height: inherit;
    padding: 0;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    outline: none;
    background: #fff;
`;
