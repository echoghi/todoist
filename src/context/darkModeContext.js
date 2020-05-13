import React, { createContext, useContext, useState } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
    const darkModeSetting = JSON.parse(cookies.get('isDark'));

    const [darkMode, toggleDarkMode] = useState(darkModeSetting);

    const setDarkMode = (isDarkMode) => {
        toggleDarkMode(isDarkMode);
        cookies.set('isDark', isDarkMode, { path: '/' });
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);
