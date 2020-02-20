import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkmode');

  useEffect(() => { 
    body.classList.toggle('dark-mode')
  }, [isDarkMode])

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;