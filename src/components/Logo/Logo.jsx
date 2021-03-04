import React from "react";
import {Aux} from "../../hoc/Aux";
import classes from './Logo.module.css'

export const Logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={props.srcImg} alt='myBurger'  />
    </div>
)