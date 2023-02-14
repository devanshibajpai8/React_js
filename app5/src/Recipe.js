import React from "react";
import './App.css';
const Recipe=({title,calories,image,ingredients})=>
{
    return(
            <div className="data">
            <h1 className="tit">
                {title}
                &nbsp;
                &nbsp;

            </h1>
            <img  className="img" src={image} alt=""></img>
            <ul type="a">
                {
                    ingredients.map(ingredients=>(
                        <li><font face="Verdana">{ingredients.text}</font></li>
                    ))
                }
                
            </ul>
            
            <p>
                <h3><u><font color="blue">Calories count:</font></u>{calories}</h3>
            </p>
            
            </div>
    )
}

export default Recipe
