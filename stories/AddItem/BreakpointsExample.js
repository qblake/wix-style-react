import React from 'react';

import {Container, Col, Row} from '../../src/Grid';
import AddItem from '../../src/AddItem/AddItem';

const BreakpointsExample = () => (
  <Container>
    <div style={{padding: '30px', background: '#F0F4F7'}}>
      <Row stretchViewsVertically>
        <Col span={3}>
          <div style={{height: '240px'}}>
            <AddItem dataHook="additem-large" size="large">
              Add New Item with a ridicilous length of name that doens’t fit in
              two lines
            </AddItem>
          </div>
        </Col>
        <Col span={3}>
          <div style={{height: '200px'}}>
            <AddItem dataHook="additem-medium" size="medium">
              Add New Item with a ridicilous length of name that doens’t fit in
              two lines
            </AddItem>
          </div>
        </Col>
        <Col span={3}>
          <div style={{height: '130px'}}>
            <AddItem dataHook="additem-small" size="small">
              Add New Item with a ridicilous length of name that doens’t fit in
              two lines
            </AddItem>
          </div>
        </Col>
        <Col span={3}>
          <div style={{height: '55px'}}>
            <AddItem dataHook="additem-tiny" size="tiny">
              Add New Item with a ridicilous length of name that doens’t fit in
              two lines
            </AddItem>
          </div>
        </Col>
      </Row>
    </div>
  </Container>
);

export default BreakpointsExample;
