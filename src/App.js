import React, {useEffect, useState} from 'react';
import Recipe from "./Components/Recipe";
import './App.css';

function App() {

  const APP_ID = "749a6121";
  const APP_KEY = "2ec1c0be635d04c9180f2ad885d45764";  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");  

  useEffect(() => {
    getRecipes();
  }, []);     // Array is second argument for useEffect. Leaving empty means it runs once,
                // when the page loads. Adding counter makes it run each time counter is clicked
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label}
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} />
      ))}      
    </div>
  );
}

export default App;
