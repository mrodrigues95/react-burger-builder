import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

// This acts as a wrapper for our core content displayed on the screen.
const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;