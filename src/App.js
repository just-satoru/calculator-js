import React, {useState} from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState(0)

  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          <input value="1" type="number" />
        </div>
        <div className='numpad'>
          <div className='numpad__numbers'>
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
          <div className='numpad__math-operators'>
            <span>+</span>
            <span>-</span>
            <span>*</span>
            <span>/</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
