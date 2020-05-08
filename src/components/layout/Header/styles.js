import styled from 'styled-components';

export const Container = styled.header`
    box-sizing: border-box;
    height: 44px;
    background-color: ${(props) => (props.darkMode ? '#000' : '#db4c3f')};
    color: #fff;
    top: 0;
    position: fixed;
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    border-bottom: 1px solid transparent;
    transition: height 0.2s ease-in;
    padding-left: 42px;
    padding-right: 42px;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    p,
    li {
        color: white;
    }
`;

export const List = styled.ul`
    display: flex;
`;

export const Item = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 5px 10px;
    text-align: center;
    vertical-align: middle;

    &:hover {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const Logo = styled.div`
    img {
        width: 24px;
    }
`;
export const Settings = styled.div`
    text-align: right;
`;
