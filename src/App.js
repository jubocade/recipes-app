import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./components/Recipes";

const App = () => {
  const APP_ID = "05d7f1d1";
  const KEY = "0b727813b5cd72b05e18830036b320c3";

const [recipes, setRecipes] = useState([]);
 const[search, setSearch] = useState("");
 const[query, setQuery] = useState("chicken");


 useEffect(() => {
   getRecipes();
 }, [query])


  const getRecipes = () => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY}`)
    .then(response => response.json())
    .then(data => setRecipes(data.hits))
  }



  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const searchResults = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  
  return (
    <div className="app">
      <form className="search-form" onSubmit={searchResults}>
        <input className="search-bar" type="text" placeholder="Search ingredients, e.g potato..." value={search} onChange={updateSearch}/>
        <input className="search-button" type="submit"/>
      </form>
      <div className="recipes-container">
      {recipes.map(recipe => {
        return(
            <Recipe
           key={recipe.recipe.label}
           title={recipe.recipe.label}
           ingredients={recipe.recipe.ingredients}
           calories={Math.round(recipe.recipe.calories)}
           image={recipe.recipe.image}
           />
        );
      })}
      </div>  
    </div>
  );
}

export default App;
