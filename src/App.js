import './App.css';
import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';

function App() {

  const APP_ID = "a7ecde4e";
  const APP_KEY = "bb0f32a62ebadb8dbddd6f71abed63ec"

  const [recipes , setRecipes] = useState([]);
  const [search , setSearch] = useState("");
  const [query,setQuery] = useState('chicken')

  useEffect(()=>{
    getRecipes();
  },[query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits);
  }

  const searchHandler = (e)=>{
    setSearch(e.target.value);
  }

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">
      <form className="search-form">
        <input onChange={searchHandler} className="search-bar" type="text" value={search} />
        <button onClick={getSearch} className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(r =>(
          <Recipe title={r.recipe.label}
            calories={r.recipe.calories}
            image={r.recipe.image}
            key={r.recipe.label}
            ingredients={r.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
