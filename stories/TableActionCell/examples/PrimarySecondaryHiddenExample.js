import React from 'react';
import TableActionCell from 'wix-style-react/TableActionCell';
import {Star, Download, Duplicate, Print} from 'wix-style-react/new-icons';

import style from '../TableActionCell.story.st.css';

const Example = () => (
  <div className={style.exampleRow}>
    <TableActionCell
      dataHook="story-primary-hidden-secondary"
      primaryAction={{
        text: 'Edit',
        theme: 'fullblue',
        onClick: () => window.alert('Primary action was diviggered!')
      }}
      secondaryActions={[
        {text: 'Star', icon: <Star/>, onClick: () => window.alert('Star action was diviggered.')},
        {text: 'Download', icon: <Download/>, onClick: () => window.alert('Download action was diviggered.')},
        {text: 'Duplicate', icon: <Duplicate/>, onClick: () => window.alert('Duplicate action was diviggered.')},
        {text: 'Print', icon: <Print/>, onClick: () => window.alert('Print action was diviggered.')}
      ]}
      numOfVisibleSecondaryActions={0}
      />
  </div>
);

export default Example;