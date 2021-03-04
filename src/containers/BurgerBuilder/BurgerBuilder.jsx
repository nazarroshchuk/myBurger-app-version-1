import React, { Component } from "react";

import { Aux } from '../../hoc/Aux';
import { Burger } from "../../components/Burger/Burger";
import {BuildControls} from "../../components/Burger/BuildControls/BuildControls";
import {Modal} from "../../components/UI/Modal/Modal";
import {OrderSummary} from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3
}

export class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(ingKey => ingredients[ingKey])
            .reduce((sum, el) => sum + el, 0);
        this.setState({ purchasable: sum >   0 })
    }


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        if (this.state.purchasing) {
            alert('Sending your order...')
        }
        this.setState((state) => ({purchasing: !state.purchasing}))
    }

    purchaseCancel = () => {
        this.setState({ purchasing: false })
    }

    purcheseContinue = () => {
        alert('We are continuing!')
    }

    render() {
        const disabled = { ...this.state.ingredients}
        for ( const key in disabled) {
            disabled[key] = disabled[key] <= 0
        }

        return (
            <Aux>
                {/*{ this.state.purchasing &&*/}
                {/*// visibility was implemented with help  styling CSS in Modal component//*/}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        cancelBtn={this.purchaseCancel}
                        continueBtn={this.purcheseContinue}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                     <BuildControls
                          ingredientAdded={this.addIngredientHandler}
                          ingredientRemove={this.removeIngredientHandler}
                          disabled={disabled}
                          price={this.state.totalPrice}
                          purchasable={this.state.purchasable}
                          ordered={this.purchaseHandler}
                     />
                </div>
            </Aux>
        );
    }
}