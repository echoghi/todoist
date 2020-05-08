import React from 'react';
import SideBar from '../Sidebar';
import Tasks from '../../Tasks';
import styled from 'styled-components';

const Section = styled.section`
    display: grid;
    align-items: center;
    grid-template-columns 1fr auto;
`;

const Content = () => (
    <Section>
        <SideBar />
        <Tasks />
    </Section>
);

export default Content;
