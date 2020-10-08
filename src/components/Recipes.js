import React from "react";
import style from "./css-modules/recipe.module.css";

const Recipe = (props) => {
    return(
        <div className={style.recipes}>
            <h1 className={style.titles}>{props.title}</h1>
            <ol className={style.lists}>
                {props.ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.paragraphs}>Calories: {props.calories}</p>
            <img className={style.images} src={props.image} alt=""/>
        </div>
    );
}

export default Recipe;