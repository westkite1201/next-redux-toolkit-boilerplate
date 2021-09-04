import { useState } from 'react';

const isServer = typeof window === 'undefined';
export const useDarkMode = (): [string, () => void] => {
  const localTheme = !isServer && window.localStorage.getItem('theme');
  const initialState = localTheme || 'light';
  const [theme, setTheme] = useState(initialState);

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return [theme, toggleTheme];
};
