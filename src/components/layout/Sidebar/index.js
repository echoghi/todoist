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
import { useSelectedProjectValue, useDarkMode, useProjectsValue } from '../../../context';
import Projects from '../../Projects';
import AddProject from '../../AddProject';

const SideBar = () => {
    const { darkMode } = useDarkMode();
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    const favoriteProjects = projects.filter((project) => project.favorite);
    console.log(favoriteProjects);

    return (
        <Bar data-testid="sidebar" darkMode={darkMode}>
            <List darkMode={darkMode}>
                <Item
                    darkMode={darkMode}
                    active={active === 'inbox'}
                    data-testid="inbox"
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                        document.title = `Inbox: Todoist`;
                    }}
                >
                    <Icon>
                        <FaInbox />
                    </Icon>
                    <span>Inbox</span>
                </Item>
                <Item
                    darkMode={darkMode}
                    active={active === 'today'}
                    data-testid="today"
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                        document.title = `Today: Todoist`;
                    }}
                >
                    <Icon>
                        <FaRegCalendar />
                    </Icon>
                    <span>Today</span>
                </Item>
                <Item
                    darkMode={darkMode}
                    active={active === 'next_7'}
                    data-testid="next_7"
                    onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                        document.title = `Upcoming: Todoist`;
                    }}
                >
                    <Icon>
                        <FaRegCalendarAlt />
                    </Icon>
                    <span>Next 7 Days</span>
                </Item>
                <Projects favorites />
            </List>

            <Middle onClick={() => setShowProjects(!showProjects)} darkMode={darkMode}>
                <CaretIcon active={showProjects ? `${showProjects}` : null} />

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
