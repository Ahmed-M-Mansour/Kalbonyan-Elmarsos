import { useEffect, useState } from "react";


const useCounter = (number) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCounter((prevCounter) => prevCounter + number);
    }, 1000);

    return () => clearInterval(interval);
  }, [number]);

  return counter ; 
}

export default useCounter ; 