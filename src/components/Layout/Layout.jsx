import React, { Component } from "react";
import { Aux } from '../../hoc/Aux';
import classes from './Layout.module.css'
import {Toolbar} from "../Navigation/Toolbar/Toolbar";
import {SideDrawer} from "../Navigation/SideDrawer/SideDrawer";

export class Layout extends Component  {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState(state => ({ showSideDrawer: !state.showSideDrawer}))
    }
    render() {
       return (
           <Aux>
               <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
               <SideDrawer
                   open={this.state.showSideDrawer}
                   closed={this.sideDrawerClosedHandler}
               />
               <main className={classes.Content}>
                   {this.props.children}
               </main>
           </Aux>
       )
    }
}