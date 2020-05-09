import React from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { createGlobalStyle } from 'styled-components';
import {
    SelectedProjectProvider,
    ProjectsProvider,
    DarkModeProvider,
    useDarkMode,
} from './context';
import { theme } from './constants';

const GlobalStyle = createGlobalStyle`
    html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    }
    *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1;
        font-family: 'Roboto', sans-serif;
        color: ${(props) =>
            props.darkMode ? theme.colors.darkTextPrimary : theme.colors.textPrimary};
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    [data-reach-dialog-content] {
        padding: 0;
        border-radius: 4px;
        width: 400px
    }

    [data-reach-dialog-overlay] {
        z-index: 9999
    }

    [data-reach-listbox-popover] {
        z-index: 99999;
        height: 300px;
        overflow-y: scroll;
    }

    [data-reach-listbox-option][data-current] {
        background: #f9f9f9;
        font-weight: normal
    }
`;

const AppContent = () => {
    const { darkMode } = useDarkMode();
    return (
        <main data-testid="application">
            <GlobalStyle darkMode={darkMode} />
            <Header />
            <Content />
        </main>
    );
};

function App() {
    return (
        <DarkModeProvider>
            <SelectedProjectProvider>
                <ProjectsProvider>
                    <AppContent />
                </ProjectsProvider>
            </SelectedProjectProvider>
        </DarkModeProvider>
    );
}

export default App;
