import React from 'react';
import Firebase from '../firebase';
import styled from 'styled-components';

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
`;

const Checkbox = ({ id }) => {
    const archiveTasks = () => {
        Firebase.firestore.collection('tasks').doc(id).update({
            archived: true,
        });
    };

    return <Container data-testid="checkbox" onClick={archiveTasks}></Container>;
};

export default Checkbox;
