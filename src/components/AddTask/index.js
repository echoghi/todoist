import React, { useState } from 'react';
import { useSelectedProjectValue, useDarkMode } from '../../context';
import Firebase from '../../firebase';
import moment from 'moment';
import {
    Container,
    TaskInput,
    AddTaskButton,
    CancelAction,
    AddTaskMain,
    ModalContent,
    ModalClose,
    CustomModalHeader,
} from './styles';
import { FaPlus, FaRegListAlt, FaRegCalendarAlt, FaTimes } from 'react-icons/fa';
import { ActionContainer, AddIcon } from '../AddProject/styles';
import ProjectOverlay from '../ProjectOverlay';
import TaskDate from '../TaskDate';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    quickAdd,
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const { darkMode } = useDarkMode();
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);
    const { selectedProject } = useSelectedProjectValue();

    const handleOverlayClick = () => {
        setShowProjectOverlay(!showProjectOverlay);
    };

    const addTask = () => {
        const projectId = project || selectedProject;

        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }

        return (
            task &&
            projectId &&
            Firebase.firestore.collection('tasks').add({
                archived: false,
                projectId,
                task,
                date: collatedDate || taskDate,
                userId: '33',
            })
        ).then(() => {
            setTask('');
            setProject('');
            setShowMain('');
            setShowProjectOverlay(false);
        });
    };

    const closeQuickAdd = () => {
        setShowMain(false);
        setShowProjectOverlay(false);
        setShowQuickAddTask(false);
    };

    const addQuickTask = () => {
        addTask();
        closeQuickAdd();
    };
    return (
        <Container showQuickAdd={showQuickAddTask}>
            {showAddTaskMain && !quickAdd && !showMain && (
                <ActionContainer onClick={() => setShowMain(!showMain)}>
                    <AddIcon data-testid="show-main-action">
                        <FaPlus />
                    </AddIcon>
                    <span data-testid="add-task-action">Add Task</span>
                </ActionContainer>
            )}

            {showQuickAddTask && (
                <Dialog
                    isOpen={showQuickAddTask}
                    onDismiss={closeQuickAdd}
                    aria-label="Form to add a task"
                >
                    <CustomModalHeader darkMode={darkMode}>
                        <h1>Quick Add Task</h1>
                        <ModalClose onClick={closeQuickAdd}>
                            <FaTimes />
                        </ModalClose>
                    </CustomModalHeader>

                    <ModalContent>
                        <ProjectOverlay
                            setProject={setProject}
                            showProjectOverlay={showProjectOverlay}
                            setShowProjectOverlay={setShowProjectOverlay}
                        />

                        <TaskDate
                            setTaskDate={setTaskDate}
                            showTaskDate={showTaskDate}
                            setShowTaskDate={setShowTaskDate}
                        />
                        <TaskInput
                            data-testid="add-task-content"
                            type="text"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder="e.g. Renew gym every May 1st #Health"
                            darkMode={darkMode}
                        />
                        <AddTaskButton type="button" data-testid="add-task" onClick={addQuickTask}>
                            Add Task
                        </AddTaskButton>
                        <span
                            id="show-project-overlay"
                            data-testid="show-project-overlay"
                            onClick={handleOverlayClick}
                        >
                            <FaRegListAlt />
                        </span>
                        <span
                            id="show-task-date"
                            data-testid="show-task-date"
                            onClick={() => setShowTaskDate(!showTaskDate)}
                        >
                            <FaRegCalendarAlt />
                        </span>
                    </ModalContent>
                </Dialog>
            )}

            {showMain && (
                <AddTaskMain data-testid="add-task-main">
                    <ProjectOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />

                    <TaskDate
                        setTaskDate={setTaskDate}
                        showTaskDate={showTaskDate}
                        setShowTaskDate={setShowTaskDate}
                    />
                    <TaskInput
                        data-testid="add-task-content"
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="e.g. Renew gym every May 1st #Health"
                        darkMode={darkMode}
                    />
                    <AddTaskButton type="button" data-testid="add-task" onClick={addTask}>
                        Add Task
                    </AddTaskButton>

                    <CancelAction
                        data-testid="add-task-main-cancel"
                        onClick={() => {
                            setShowMain(false);
                            setShowProjectOverlay(false);
                        }}
                    >
                        Cancel
                    </CancelAction>

                    <span
                        id="show-project-overlay"
                        data-testid="show-project-overlay"
                        onClick={handleOverlayClick}
                    >
                        <FaRegListAlt />
                    </span>
                    <span
                        id="show-task-date"
                        data-testid="show-task-date"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                    >
                        <FaRegCalendarAlt />
                    </span>
                </AddTaskMain>
            )}
        </Container>
    );
};

export default AddTask;
