import React from "react";

function useLocalStorage (key, value) {
  
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if(value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
        return value;
      }
    } catch(err) {
      return value;
    }
  });

  const setValue = newValue => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;