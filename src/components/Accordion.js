import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

export const Container = styled.div``;

export const Tab = styled.div`
    display: flex;
`;

const Accordion = ({ children, name }) => {
    return (
        <Container>
            <Tab>
                <FaChevronDown />
                <span>{name}</span>
            </Tab>
            {children}
        </Container>
    );
};

export default Accordion;
