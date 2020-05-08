import React, { useEffect } from 'react';
import CheckBox from '../Checkbox';
import { TasksList, Container, Task } from './styles';
import { useTasks } from '../../hooks';
import { useSelectedProjectValue, useProjectsValue } from '../../context';
import { collatedTasksExist, getCollatedTitle, getTitle } from '../../helpers';
import { collatedTasks } from '../../constants';
import AddTask from '../AddTask';

const Tasks = () => {
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

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    }, []);

    return (
        <Container data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <TasksList>
                {tasks.map((task) => (
                    <Task key={`${task.id}`}>
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
