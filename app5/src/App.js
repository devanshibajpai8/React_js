import './App.css';
import Recipe from './Recipe';
import React,{useEffect,useState} from 'react';
import chef from './images/chef.jpg';
const App=()=>{
  const APP_ID="db4a488d";
  const APP_KEY="65a7fb611dd3d486f5c5170a09016516	";
  const[recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState(""); 
  const [query,setQuery]=useState('');   
  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async()=> {
    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e=>{
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
  }
  return(
    <div className="App">
      <b>
      <a href='https://www.youtube.com/watch?v=VozPNrt-LfE'>About</a>&nbsp;

      <a href='https://www.edamam.com/'>Home</a>&nbsp;

      <a href='./contact.html'>Contact us</a>&nbsp;
      </b>

      <div className='container'>
       &nbsp; <h1 ><u><font face="Verdana" color='white'>RECIPE APP</font></u></h1>
       <img className="im" src={chef} alt="tht" />
      </div>
      <h2 className="te"><font face="Verdana" color='white'>We Have Got Anything And Everything You Want!!!</font></h2>
      <form onSubmit={getSearch}  className="rec-form">
        
        <input className="in" type="text" value={search} onChange={updateSearch} />
        &nbsp;
        &nbsp;
        <button className="but" type='submit' >SEARCH</button>
      </form>
      <div className='info'>
      {recipes.map(recipe=>
      (
        <Recipe 
        key={recipe.recipe.label}
        image={recipe.recipe.image}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        ingredients={recipe.recipe.ingredients}
         />
      ))
      }
      
      </div>  
    </div>
  )
}

export default App;
