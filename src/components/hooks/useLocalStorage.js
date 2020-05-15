import React, { useState } from 'react';

const useLocalStorage = ({key, initialValue}) => {
  const [value, setStoredValue] = useState(() => {
    // Check for existence of the key in local storage
    // and if it doesn't exist yet, set to a default value
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // The setValue function uses the setter defined with the
  // state hook to set or update localStorage state
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return [value, setValue];
}

export default useLocalStorage;
