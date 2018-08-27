import React from 'react';

import AddItem from '../../src/AddItem';
import {Col, Row} from '../../src/Grid';
import Card from '../../src/Card/Card';


const AddImageExample = () => (
  <div style={{padding: '30px', background: '#F0F4F7'}}>
    <Card>
      <Card.Content>
        <Row stretchViewsVertically>
          <Col stretchViewsVertically>
            <AddItem size="small" theme="image"/>
          </Col>
        </Row>
      </Card.Content>
    </Card>
  </div>
);




export default AddImageExample;
