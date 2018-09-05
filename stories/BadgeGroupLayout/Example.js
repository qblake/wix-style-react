import React from 'react';
import BadgeGroupLayout from '../../src/BadgeGroupLayout';
import styles from './BadgeGroupLayout.scss';

const options = [
  {id: 0, color: 'red', text: 'Red'},
  {id: 1, color: 'green', text: 'Green'},
  {id: 2, color: 'blue', text: 'Blue'},
  {id: 3, color: 'brown', text: 'Red'},
];

class ControlledBadgeGroupLayoutExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.container}>
        <BadgeGroupLayout options={options} selectedId={2}/>
      </div>
    );
  }
}

export default () => <ControlledBadgeGroupLayoutExample/>;
