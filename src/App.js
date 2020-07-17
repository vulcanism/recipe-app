import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const APP_ID = "749a6121";
  const APP_KEY = "2ec1c0be635d04c9180f2ad885d45764"; 

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  }, []);     // Array is second argument for useEffect. Leaving empty means it runs once,
                // when the page loads. Adding counter makes it run each time counter is clicked
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json()
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
