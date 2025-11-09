import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons';

const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-full bg-slate-200 dark:bg-dark-card text-slate-600 dark:text-dark-subtext hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-bg focus:ring-brand-primary transition-colors"
        >
            {theme === 'light' ? (
                <MoonIcon className="w-5 h-5" />
            ) : (
                <SunIcon className="w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeSwitcher;
