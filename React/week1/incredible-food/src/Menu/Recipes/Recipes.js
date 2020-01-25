import React from 'react'

const Recipes = ({ name, ingredients, steps, img }) => {
    return (
        <section>
            <h3>{name}</h3>
            <img src={img}></img>
            <div class="ingredients">
                <ul>
                    {ingredients.map((ingredient, i) =>
                        <li key={i}>{ingredient.name}</li>
                    )}
                </ul>
            </div>
            <div class="steps">
                <h3></h3>
                <ul>
                    {steps.map((step, i) =>
                        <li key={i}>{step}</li>
                    )}

                </ul>
            </div>
        </section>
    )
}
export default Recipes;