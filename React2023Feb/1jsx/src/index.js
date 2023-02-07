import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import MyFooter, { firstDayOfWeek,secondDayOfWeek } from './MyFooter';

const element = document.getElementById('root');

const root = ReactDOM.createRoot(element);

function App() {
  let message = myMethod(11);
  let inputType = 'number';
  let min = 1;
  let max = 10;

  return (
    <div>
      <h1>Welcome</h1>
      <h2>{message}</h2>
      <h3>
        <span>Current Datetime:</span>&nbsp;
        {new Date().toLocaleString()}
      </h3>

      <h1>
        <input type={inputType} min={min} max={max} placeholder={min} />
      </h1>

      <div style={{ color: 'green', fontWeight: 'bold' }}>
        <label>Enter something</label>
        <input
          type="text"
          placeholder="Please start typing"
          style={{ color: 'red', fontSize: '50px', border: '3px solid blue' }}
          nums={[1, 2, 3, 4, 5]}
        />
      </div>

      <h1>
        <textarea
          autoFocus
          maxLength={10}
          spellCheck={true}
          placeholder="start typing"
        />
      </h1>

      <h1>
        <label htmlFor="fuelLevelLabel">Fuel Level</label>
        <meter
          id="fuelLevelMeter"
          value={75}
          min={0}
          max={100}
          low={25}
          high={70}
          optimum={80}
        >
          75 out of 100
        </meter>
      </h1>

      <div className="blackBackgroundWithWhiteForegroundColor">Some Text</div>

      <div  style={{ marginTop:'50px'}}>
        <a
          href="https://www.google.com"
          style={{ margin:'10px' ,padding: '100px', fontStyle: 'italic', fontSize:'20px', fontWeight:'bold' }}
        >
          Click Me!
        </a>
      </div>

      <div>{firstDayOfWeek}</div>
      <div>{secondDayOfWeek}</div>

      <MyFooter/>



      
    </div>
  );
}

function myMethod(i) {
  if (i > 10) {
    return 'Hello';
  }
  return 'By To All';
}

root.render(<App />);
