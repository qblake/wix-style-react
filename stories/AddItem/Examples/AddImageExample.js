import React from 'react';
import {Col, Row} from 'wix-style-react/Grid';
import Card from 'wix-style-react/Card';
import AddItem from 'wix-style-react/AddItem';

export default () => (
  <div style={{padding: '30px', background: '#F0F4F7'}}>
    <Card>
      <Card.Content>
        <Row>
          <Col>
            <AddItem size="small" theme="image"/>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </div>
);
