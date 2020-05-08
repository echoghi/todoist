import React from 'react';
import { Container, ListItem, TaskDateList, IconContainer } from './styles';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';

const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
    const handleDateToday = () => {
        setShowTaskDate(false);
        setTaskDate(moment().format('DD/MM/YYYY'));
    };
    const handleDateTomorrow = () => {
        setShowTaskDate(false);
        setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
    };
    const handleDateNextWeek = () => {
        setShowTaskDate(false);
        setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
    };
    return (
        showTaskDate && (
            <Container data-testid="task-date-overlay">
                <TaskDateList>
                    <ListItem onClick={handleDateToday} data-testid="task-date-today">
                        <IconContainer>
                            <FaSpaceShuttle />
                        </IconContainer>
                        <span>Today</span>
                    </ListItem>
                    <ListItem data-testid="task-date-tomorrow" onClick={handleDateTomorrow}>
                        <IconContainer>
                            <FaSun />
                        </IconContainer>
                        <span>Tomorrow</span>
                    </ListItem>
                    <ListItem data-testid="task-date-next-week" onClick={handleDateNextWeek}>
                        <IconContainer>
                            <FaRegPaperPlane />
                        </IconContainer>
                        <span>Next 7 Days</span>
                    </ListItem>
                </TaskDateList>
            </Container>
        )
    );
};

export default TaskDate;
