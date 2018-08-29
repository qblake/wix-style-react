import React from 'react';
import PropTypes from 'prop-types';

import {Col, Row} from 'wix-style-react/Grid';
import AddItem from 'wix-style-react/AddItem';
import Card from 'wix-style-react/Card';

export default () => (
  <Row stretchViewsVertically>
    <Col span={6}>
      <Card>
        <Card.Content>
          <CenterElements>
            <div
              style={{
                height: 120,
                width: 120,
                backgroundColor: '#dfe5eb',
                borderRadius: '50%'
              }}
              />
            <h4>Clark Broke</h4>
            <p>jen@yoga.train</p>
          </CenterElements>
        </Card.Content>
      </Card>
    </Col>
    <Col span={6}>
      <AddItem size="medium"/>
    </Col>
  </Row>
);

const CenterElements = ({children}) => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {children}
  </div>
);

CenterElements.propTypes = {
  children: PropTypes.node
};
