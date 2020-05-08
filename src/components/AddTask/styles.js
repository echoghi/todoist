import styled from 'styled-components';
import { Input, AddButton, CancelButton } from '../../styles';

export const Container = styled.div`
    padding: 10px 0 5px 11px;
`;

export const ModalClose = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    h1 {
        color: #202020;
        font-size: 13px;
        padding: 15px 1rem 0;
    }
`;

export const AddTaskMain = styled.div`
    position: relative;

    span {
        cursor: pointer;

        &#show-project-overlay {
            position: absolute;
            right: 5px;
        }

        &#show-task-date {
            position: absolute;
            right: 30px;
        }

        svg {
            fill: grey;
        }
    }
`;

export const ModalContent = styled(AddTaskMain)`
    padding: 1rem;

    span {
        &#show-project-overlay {
            right: 20px;
        }

        &#show-task-date {
            right: 45px;
        }
    }
`;

export const TaskInput = styled(Input)`
    padding: 10px 8px;
    margin: 5px 0;

    &:placeholder {
        color: #ddd;
    }
`;

export const AddTaskButton = styled(AddButton)`
    margin: 0;
`;

export const CancelAction = styled(CancelButton)`
    background: none;
    border: none;
    color: #555;
    font-weight: 500;

    &:hover {
        text-decoration: underline;
    }
`;
