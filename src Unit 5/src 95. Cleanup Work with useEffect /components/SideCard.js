import React, { Fragment } from 'react';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://i.imgur.com/yyZwINK.jpg';

const SideCard = () => (
  <Fragment>
  
    <UncontrolledAlert color="danger" className="d-none d-lg-block">
      <strong>You got shit to do!.</strong>
    </UncontrolledAlert>
    
    <Card>
      <CardImg top width="10%" src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">React Caltasks App</CardTitle>
        <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>ThomasjDinh</CardSubtitle>
        <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>**Under Construction**</CardText>
        <Button color="success" className="font-weight-bold">Objetivos</Button>
      </CardBody>
    </Card>
    
  </Fragment>
);

export default SideCard;