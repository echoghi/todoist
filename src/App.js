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

    *:focus {
        outline: none
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
        background: ${(props) => (props.darkMode ? '#363636' : '#f9f9f9')};
        font-weight: normal
    }

    [data-reach-dialog-content] {
        background-color: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};
    }

    [data-reach-listbox-popover] {
        background: ${(props) => (props.darkMode ? theme.colors.bgDark : '#fff')};
        border-radius: 0 0 3px 3px;

        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: ${(props) => (props.darkMode ? '#171717' : 'inherit')};
            border-radius: 1rem;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: ${(props) => (props.darkMode ? theme.colors.textPrimary : '#ddd')};
            width: 15px;
            border-radius: 1rem;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
        }

        &:focus-within {
            box-shadow: none;
            outline: none
        }
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
