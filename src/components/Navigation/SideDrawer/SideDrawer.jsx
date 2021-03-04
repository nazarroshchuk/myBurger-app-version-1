import React from "react";
import {Logo} from "../../Logo/Logo";
import {NavigationItems} from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import logo from '../../../assets/images/burger-logo.png'
import {Aux} from "../../../hoc/Aux";
import {Backdrop} from "../../UI/Backdrop/Backdrop";

export const SideDrawer = (props) => {
    let attachedClasses = [ classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses  = [ classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo srcImg={logo}/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
}