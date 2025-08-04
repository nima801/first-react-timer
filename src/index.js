import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>hello to All the world</h1>
);

let time = ()=>{
  const elem= (
    <div>
      <h1>the local time</h1>
      <h2>
        the time is: {new Date().toLocaleTimeString()}
      </h2>
    </div>
  )
  ReactDOM.createRoot(document.getElementById("root")).render(elem);
}
setInterval(time,1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
