import React from 'react';
import { Container, TaskDateList, IconContainer } from './styles';
import { ListItem } from '../../styles';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';
import { useDarkMode } from '../../context';

const TaskDate = React.forwardRef(({ setTaskDate, showTaskDate, setShowTaskDate }, ref) => {
    const { darkMode } = useDarkMode();
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
            <Container data-testid="task-date-overlay" darkMode={darkMode} ref={ref}>
                <TaskDateList darkMode={darkMode}>
                    <ListItem
                        onClick={handleDateToday}
                        data-testid="task-date-today"
                        darkMode={darkMode}
                    >
                        <div>
                            <IconContainer>
                                <FaSpaceShuttle />
                            </IconContainer>
                            <span>Today</span>
                        </div>
                        <div>{moment().format('ddd')}</div>
                    </ListItem>
                    <ListItem
                        data-testid="task-date-tomorrow"
                        onClick={handleDateTomorrow}
                        darkMode={darkMode}
                    >
                        <IconContainer>
                            <FaSun />
                        </IconContainer>
                        <span>Tomorrow</span>
                    </ListItem>
                    <ListItem
                        data-testid="task-date-next-week"
                        onClick={handleDateNextWeek}
                        darkMode={darkMode}
                    >
                        <IconContainer>
                            <FaRegPaperPlane />
                        </IconContainer>
                        <span>Next 7 Days</span>
                    </ListItem>
                </TaskDateList>
            </Container>
        )
    );
});

export default TaskDate;
