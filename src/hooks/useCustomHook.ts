import { useState, useEffect } from 'react';

const useCustomHook = (): [number, () => void] => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);

  const increment = (): void => {
    setCount(count + 1);
  };

  return [count, increment];
};

export default useCustomHook;