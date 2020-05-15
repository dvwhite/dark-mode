import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkmode', false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;