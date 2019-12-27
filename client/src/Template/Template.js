import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { Route, NavLink, BrowserRouter } from 'react-router-dom';

import ColumnChart from './column charts/Column Chart';
import BarChart from './column charts/Bar Chart';

import StackedBarChart from './column charts/Stacked Bar Chart';

class Template extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink to="/column-chart">Column Chart</NavLink>

        <div
          className="col"
          xl={{ span: 7, offset: 3 }}
          lg={{ span: 8, offset: 3 }}
          xs={{ span: 8, offset: 2 }}
        >
          <Container>
            <div className="content">
              <Route exact path="/" component={ColumnChart} />

              <Route path="/column-chart" component={ColumnChart} />
            </div>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default Template;
