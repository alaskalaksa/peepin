import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  // setCurrentTime is a 'dispatchSetState' function
  console.log('Hello?', currentTime, setCurrentTime);

  // What is useEffect?
  /* If you’re familiar with React class lifecycle methods, you can
  think of useEffect Hook as componentDidMount, componentDidUpdate,
  and componentWillUnmount combined.
  By using this Hook, you tell React that your component needs to do
  something after render. React will remember the function you passed
  (we’ll refer to it as our “effect”), and call it later after performing
  the DOM updates.
  */
  useEffect(() => {
    /* We issue a request from the frontend to the backend:
    Because of the proxy configuration I don't have to use the port
    5000 URL, I can just use /time, which will make the request
    go to http://localhost:3000/time */
    fetch('/api/time').then(res => res.json()).then(data => {
      document.title = 'It is currently ' + data.time;
      setCurrentTime(data.time);
    });
  }, []);

  return (
  <div classname= "ParentDiv">
    <div className="Navbar">
        <React.Fragment>
            <Navbar/>
        </React.Fragment>
    </div>
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
    </div>
  );
}

export default App;






