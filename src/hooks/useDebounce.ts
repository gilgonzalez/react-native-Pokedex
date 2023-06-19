import { useState, useEffect } from 'react';

const useDebounce = (input: string = '', delay: number = 500) => {

  const [debounceValue, setDebounceValue] = useState(input);

  useEffect(() => {

    const timeOut = setTimeout(() => {
      setDebounceValue(input);
    }, delay);

    return () => {
      clearTimeout(timeOut);
    };

  }, [input]);

  return debounceValue;
};

export default useDebounce;
