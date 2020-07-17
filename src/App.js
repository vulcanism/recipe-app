import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = "749a6121";
  const APP_KEY = "2ec1c0be635d04c9180f2ad885d45764";

  const exampleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  });
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button onClick={() => setCounter(counter + 1)} className="search-button" type="submit">{counter}</button>
      </form>
    </div>
  );
}

export default App;
