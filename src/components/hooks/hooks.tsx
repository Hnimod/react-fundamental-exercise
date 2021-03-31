import { useState, useRef, useEffect } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  const [array, setArray] = useState(() => {
    const initialArray = ['one', 'two', 'three'];
    return initialArray;
  });

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const showText = (value: string) => {
    console.log(value);
  };

  const resetArray = () => {
    setArray(['1']);
  };

  // const [number, setNumber] = useState(() => {
  //   const initialNumber = 0;
  //   return initialNumber;
  // });

  // const [object, setObject] = useState(() => {
  //   const initialObject = {};
  //   return initialObject;
  // });

  return (
    <div>
      <div className="center">
        <p>
          Number: {count} - Previous Number: {prevCount.current}
        </p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div>
        <p>Array: {array}</p>
        <button onClick={resetArray}>Reset Array</button>
      </div>

      <div className="center">
        <input
          id="text"
          name="text"
          onChange={(e) => showText(e.target.value)}
        />
      </div>

      <div className="center">
        <select onChange={(e) => showText(e.target.value)}>
          <option value="select">Select</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>
    </div>
  );
};

export default Hooks;
