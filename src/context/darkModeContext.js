import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks';

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useLocalStorage('isDark', false);

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);
