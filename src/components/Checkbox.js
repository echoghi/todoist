import React from 'react';
import Firebase from '../firebase';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';

export const Container = styled.div`
    cursor: pointer;
    border-color: gray;
    color: #343434;
    height: 16px;
    width: 16px;
    display: block;
    margin-right: 1rem;
    border: 1px solid gray;
    border-radius: 16px;
    transition: 0.2s all ease;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        opacity: 0;
        transition: 0.2s opacity ease;
        height: 7px;
        width: 7px;
        fill: gray;
        margin-top: 1px;
    }

    &:hover {
        background-color: hsla(0, 0%, 50.2%, 0.2);

        svg {
            opacity: 1;
        }
    }
`;

const Checkbox = ({ id }) => {
    const archiveTasks = () => {
        Firebase.firestore.collection('tasks').doc(id).update({
            archived: true,
        });
    };

    return (
        <Container data-testid="checkbox" onClick={archiveTasks}>
            <FaCheck />
        </Container>
    );
};

export default Checkbox;
