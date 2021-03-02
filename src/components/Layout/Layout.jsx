import React from "react";
import { Aux } from '../../hoc/Aux';
import classes from './Layout.css'

export const Layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className='Content'>
            {props.children}
            {console.log(classes)}
        </main>
    </Aux>
)