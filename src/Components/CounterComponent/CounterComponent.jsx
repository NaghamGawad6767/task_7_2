import './CounterComponent.css'
import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  // تابع لزيادة العد
  const handleInc = () => {
    if (count < 10) {
      setCount(count + 1);
    } else if (count < 100) {
      setCount(count + 10);
    } else if (count < 1000) {
      setCount(count + 100);
    }
  };

  // تابع لإنقاص العد عندما يصل العد إلى 1000
  const handleDec = () => {
    if (count >= 100) {
      setCount(count - 100);
    }
  };

  //  useEffect  تغييرات العد
  useEffect(() => {
    // عرض نافذة
    if (count === 0) {
      alert('welcome to the counting application');
    }

    // عرض النافذة المنبثقة عند وصول العد إلى 10 أو أي مضاعف له
    if (count > 0 && (count % 10 === 0)) {
      setMessage(`the number now: ${count}`);
      alert(`the number now: ${count}`);
    }

    // تغيير لون الخلفية عند وصول العد إلى 10 أو أي مضاعف له
    if (count > 0 && (count % 10 === 0)) {
      setBackgroundColor(count === 10 ? 'lightgreen' : count === 100 ? 'lightblue' : 'lightcoral');
    }

  }, [count]);

  return (
    <div style={{ backgroundColor: backgroundColor, padding: '20px' }}>
      <h1>Count: {count}</h1>
      {count < 1000 ? (
        <button onClick={handleInc}>Increase Count</button>
      ) : (
        <button onClick={handleDec}>Decrease Count</button>
      )}
      {count === 1000 && <h2>the number to 1000</h2>}
    </div>
  );
};

export default CounterComponent;