import React from './react';

import classes from './Burger.css';
import {BurgerIngredient} from './BurgerIngredient/BurgerIngredient'

export const Burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}