import React, { useState } from 'react';
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';

import {
    Bar,
    List,
    Item,
    Middle,
    ProjectsWrapper,
    Icon,
    CaretIcon,
    ProjectsList,
    AddProjectButton,
} from './styles';
import { useSelectedProjectValue } from '../../../context';
import Projects from '../../Projects';
import AddProject from '../../AddProject';

const SideBar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <Bar data-testid="sidebar">
            <List>
                <Item
                    active={active === 'inbox'}
                    data-testid="inbox"
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <Icon>
                        <FaInbox />
                    </Icon>
                    <span>Inbox</span>
                </Item>
                <Item
                    active={active === 'today'}
                    data-testid="today"
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}
                >
                    <Icon>
                        <FaRegCalendar />
                    </Icon>
                    <span>Today</span>
                </Item>
                <Item
                    active={active === 'next_7'}
                    data-testid="next_7"
                    onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                >
                    <Icon>
                        <FaRegCalendarAlt />
                    </Icon>
                    <span>Next 7 Days</span>
                </Item>
            </List>

            <Middle onClick={() => setShowProjects(!showProjects)}>
                <CaretIcon active={showProjects} />

                <h2>Projects</h2>
                <AddProjectButton />
            </Middle>

            <ProjectsWrapper active={showProjects}>
                <ProjectsList>
                    <Projects />
                </ProjectsList>
            </ProjectsWrapper>
            <AddProject />
        </Bar>
    );
};

export default SideBar;