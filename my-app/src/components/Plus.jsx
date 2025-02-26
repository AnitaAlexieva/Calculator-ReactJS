import React, { useState } from 'react';

export default function Plus() {
  // Състояние за съхранение на стойностите на числата
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);

  // Функция за обработка на събиране
  const handlePlus = () => {
    setResult(a + b);
  };

  return (
    <div>
      
      <div>
        <input
          type="number"
          name="a"
          id="a"
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
        />
        <span> + </span>
        <input
          type="number"
          name="b"
          id="b"
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
        />
      </div>
      <button onClick={handlePlus}>Събери</button>

      {result !== null && (
        <div>
          <h3>Резултат: {result}</h3>
        </div>
      )}
    </div>
  );
}
