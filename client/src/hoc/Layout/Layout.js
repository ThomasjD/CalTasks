import React, { Component } from 'react';
import classes from './Layout.module.css';
//import Aux from '../Aux';
//import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Toolbar from '../../components/Navigation/Toolbar /Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  // const layout = props => {
  render() {
    return (
      <React.Fragment>
        {/* <Toolbar /> */}
        <SideDrawer />
        <br></br>
        <main>{this.props.children}</main>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Layout;
