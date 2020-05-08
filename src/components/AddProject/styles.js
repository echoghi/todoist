import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 0 5px 11px;
`;

export const Input = styled.input`
    display: block;
    margin-top: 10px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 5px;
    width: 100%;
`;

export const Label = styled.label`
    padding: 1rem;
    font-size: 14px;
    font-weight: 700;
    display: block;
    margin-bottom: 7px;
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

export const ModalHeader = styled.header`
    position: relative;
    padding: 0 24px;
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #ddd;

    h1 {
        font-size: 16px;
    }
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 12px 24px;
    background-color: inherit;
    border-top: 1px solid #ddd;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;
