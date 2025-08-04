import React from 'react';
import ReactDOM from 'react-dom/client';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <h1>hello to All the world</h1>
// );

// test note for git push
// this note is too!

/*
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

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();



// new timer with class Type component


class Timer extends React.Component{
  render(){
    return(
      <h2>it is: {new Date().toLocaleTimeString()}</h2>
    )
  }
}

class Hello extends React.Component{
  render(){
    return(
      <h1>Hello My Friends</h1>
    )
  }
}

class Atall extends React.Component{
  render(){
    return(
      <>
        <Hello/>
        <Timer/>
      </>
    )
  }
}

let elem = ReactDOM.createRoot(document.getElementById("root"))
// let func = ()=>{
//   elem.render(<Atall/>)
// }

setInterval(()=>{
  elem.render(<Atall/>)
},1000)