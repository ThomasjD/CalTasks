import React, { Component } from 'react';
import classes from './Layout.module.css';
//import Aux from '../Aux';
//import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Toolbar from '../../components/Navigation/Toolbar /Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <br></br>
        <main>{this.props.children}</main>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Layout;
