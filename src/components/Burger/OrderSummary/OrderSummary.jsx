import React from 'react';
import {Aux} from "../../../hoc/Aux";
import {Button} from "../../UI/Button/Button";

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

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancelBtn}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continueBtn}>CONTINUE</Button>
        </Aux>
    )
}