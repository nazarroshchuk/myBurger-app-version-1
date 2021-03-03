import React from 'react';
import {Aux} from "../../../hoc/Aux";

export const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return [ ...Array(props.ingredients[ingKey])]
                .map((_, i) => ingKey ) // turn into an array of keys according to the amount each key
        }).filter(el => el.length > 0)
            .map(( el, i) =>
                <li key={el[0] + el.length }>
                    <span style={{ textTransform: 'capitalize' }}>{`${el[0]}: ${el.length}`}</span>
                </li>);

        //Variant with staticList
    // const ingredientSummary = Object.keys(props.ingredients)
    //     .map(ingKey => {
    //     return (
    //         <li key={ingKey}>
    //             <span style={{ textTransform: 'capitalize' }}>{ingKey}: {props.ingredients[ingKey]} </span>
    //         </li>
    //     )
    // })

    console.log(ingredientSummary);
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}