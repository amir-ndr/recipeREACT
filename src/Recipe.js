import React from 'react';
import style from './recipe.module.css';

const Recipe = (props)=>{
    return (
        <div className={style.recipe}>
            <h1 className={style.h}>{props.title}</h1>
            <ul>
                {props.ingredients.map(item=>(
                    <li>
                        {item.text}
                    </li>
                ))}
            </ul>
            <p className={style.col}>colories={props.calories}</p>
            <img className={style.image} src={props.image} alt="" />
        </div>
    )
}

export default Recipe;