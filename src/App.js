import React, { useState } from 'react';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import { createGlobalStyle } from 'styled-components';
import { SelectedProjectProvider, ProjectsProvider } from './context';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,900');

    // General Settings
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
        color: #202020;
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

function App({ darkModeDefault = false }) {
    const [darkMode, setDarkMode] = useState(darkModeDefault);

    return (
        <SelectedProjectProvider>
            <ProjectsProvider>
                <main className={darkMode ? 'darkmode' : undefined} data-testid="application">
                    <GlobalStyle />
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Content />
                </main>
            </ProjectsProvider>
        </SelectedProjectProvider>
    );
}

export default App;
