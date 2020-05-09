import React, { useState } from 'react';
import { Container, Logo, Settings, List, Item } from './styles';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';
import AddTask from '../../AddTask';
import { useDarkMode } from '../../../context';

const Header = () => {
    const [shouldShowMain, setShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
    const { darkMode, setDarkMode } = useDarkMode();
    const handleDarkMode = () => setDarkMode(!darkMode);

    const handleQuickAdd = () => {
        setShowQuickAddTask(true);
        setShowMain(true);
    };

    return (
        <Container data-testid="header" darkMode={darkMode}>
            <nav>
                <Logo>
                    <img src="/images/logo.png" alt="todoist" />
                </Logo>
                <Settings>
                    <List>
                        <Item data-testid="quick-add-task-action" onClick={handleQuickAdd}>
                            <FaPlus />
                        </Item>
                        <Item data-testid="dark-mode-action" onClick={handleDarkMode}>
                            <FaPizzaSlice />
                        </Item>
                    </List>
                </Settings>
            </nav>

            <AddTask
                quickAdd
                setShowMain={setShowMain}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </Container>
    );
};

export default Header;
