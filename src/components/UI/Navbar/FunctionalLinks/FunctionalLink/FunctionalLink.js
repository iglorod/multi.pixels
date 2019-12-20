import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './FunctionalLink.module.css';

const functionalLink = (props) => {
    return (
        <NavLink className={classes.item} to={props.url}>
            {props.children}
        </NavLink>
    )
}

export default functionalLink;