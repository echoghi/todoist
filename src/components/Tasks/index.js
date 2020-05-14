import React, { useEffect } from 'react';
import moment from 'moment';
import CheckBox from '../Checkbox';
import { TasksList, Container, Task } from './styles';
import { useTasks } from '../../hooks';
import { useSelectedProjectValue, useProjectsValue, useDarkMode } from '../../context';
import { collatedTasksExist, getCollatedTitle, getTitle } from '../../helpers';
import { collatedTasks } from '../../constants';
import AddTask from '../AddTask';

const Tasks = () => {
    const { darkMode } = useDarkMode();
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { tasks } = useTasks(selectedProject);
    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name;
    }

    const date = projectName === 'Today' ? moment().format('ddd MMM Do') : '';

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    }, []);

    return (
        <Container data-testid="tasks" darkMode={darkMode}>
            <h2 data-testid="project-name">
                {projectName}
                <small>{date}</small>
            </h2>

            <TasksList>
                {tasks.map((task) => (
                    <Task key={`${task.id}`} darkMode={darkMode}>
                        <CheckBox id={task.id} />
                        <span>{task.task}</span>
                    </Task>
                ))}
            </TasksList>

            <AddTask />
        </Container>
    );
};

export default Tasks;
