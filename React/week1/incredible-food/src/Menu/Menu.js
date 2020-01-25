import React from 'react';
import Recipes from './Recipes/Recipes';
import "./style.css"
const Menu = ({ title, recipes }) => {
    return (
        <article>
            <h1>{title}</h1>
            <div className="recipes">
                {recipes.map((recipe, i) =>
                    <Recipes key={i} {...recipe} />
                )}
            </div>
        </article>
    )

}
export default Menu