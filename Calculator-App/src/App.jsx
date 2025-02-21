import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  function handleClick(value) {
    setInput(input + value)
  }

  function clearInput() {
    setInput('')
    setResult('')
  }

  function calculateResult() {
    try {
      setResult(eval(input))
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <>
      <h1>Calculator App</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="result" style={{ display: 'inline', margin: '5px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>{result}</div>
        <div
          className="buttons"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}
        >
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
