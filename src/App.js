import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = "749a6121";
  const APP_KEY = "2ec1c0be635d04c9180f2ad885d45764";

  const exampleReq = 
    `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
