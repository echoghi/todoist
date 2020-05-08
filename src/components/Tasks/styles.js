import styled from 'styled-components';

export const TasksList = styled.ul``;

export const Container = styled.div`
    width: calc(100% - 305px);
    background: #fff;
    min-height: calc(100vh);
    vertical-align: top;
    padding: 80px 40px 84px 40px;
    transition: margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    margin-left: 305px;
`;

export const Task = styled.li`
    display: flex;
    line-height: 18px;
    color: #333;
    padding: 10px;
    font-size: 14px;
    list-style-type: none;
    border-bottom: 1px solid #f0f0f0;
`;
