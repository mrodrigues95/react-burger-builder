import React from 'react';

import Aux from '../../hoc/Auxiliary';

// This acts as a wrapper for our core content displayed on the screen.
const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;