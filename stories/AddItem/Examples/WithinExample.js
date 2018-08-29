import React from 'react';
import {Row} from 'wix-style-react/Grid';
import AddItem from 'wix-style-react/AddItem';
import Card from 'wix-style-react/Card';

export default () => (
  <div style={{padding: '30px', background: '#F0F4F7'}}>
    <Card>
      <Card.Header title="Sections in Menu"/>
      <Card.Content>
        <Row>
          <AddItem theme="dashes" size="tiny">
            Add New Item
          </AddItem>
        </Row>
      </Card.Content>
    </Card>
  </div>
);
