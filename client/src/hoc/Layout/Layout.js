import React, { Component } from 'react';
import classes from './Layout.module.css';
//import Aux from '../Aux';
//import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Toolbar from '../../components/Navigation/Toolbar /Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import NavBar from '../../components/Cockpit/Navbar/Navbar';
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
        {/* <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} /> */}
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

        {/* <div className={classes.SideDrawer}>
          <NavBar drawerToggleClicked={this.sideDrawerToggleHandler} />
        </div> */}
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
