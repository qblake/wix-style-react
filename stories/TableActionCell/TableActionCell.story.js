import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';

import {storySettings} from './storySettings';
import styles from './TableActionCell.story.scss';

import TableActionCell from '../../src/TableActionCell';

import PrimaryBlueExample from './examples/PrimaryBlueExample';
import PrimaryBlueExampleRaw from '!raw-loader!./examples/PrimaryBlueExample';

import PrimaryWhiteExample from './examples/PrimaryWhiteExample';
import PrimaryWhiteExampleRaw from '!raw-loader!./examples/PrimaryWhiteExample';

import PrimarySecondaryExample from './examples/PrimarySecondaryExample';
import PrimarySecondaryExampleRaw from '!raw-loader!./examples/PrimarySecondaryExample';

import PrimarySecondaryHiddenExample from './examples/PrimarySecondaryHiddenExample';
import PrimarySecondaryHiddenExampleRaw from '!raw-loader!./examples/PrimarySecondaryHiddenExample';

import AlwaysVisibleSecondaryExample from './examples/AlwaysVisibleSecondaryExample';
import AlwaysVisibleSecondaryExampleRaw from '!raw-loader!./examples/AlwaysVisibleSecondaryExample';

import OnlySecondaryExample from './examples/OnlySecondaryExample';
import OnlySecondaryExampleRaw from '!raw-loader!./examples/OnlySecondaryExample';

import OnlyVisibleSecondaryExample from './examples/OnlyVisibleSecondaryExample';
import OnlyVisibleSecondaryExampleRaw from '!raw-loader!./examples/OnlyVisibleSecondaryExample';

import {Star, Download, Duplicate, Print} from 'wix-style-react/new-icons';

const primaryActionOptions1 = {
  text: 'Details',
  theme: 'fullblue',
  onClick: () => console.log('Details action called!')
};

const primaryActionOptions2 = {
  ...primaryActionOptions1,
  theme: 'whiteblue'
};

const secondaryActionsOption = [
  {text: 'Star', icon: <Star/>, onClick: () => console.log('Star action called!')},
  {text: 'Download', icon: <Download/>, onClick: () => console.log('Download action called!')},
  {text: 'Duplicate', icon: <Duplicate/>, onClick: () => console.log('Duplicate action called!')},
  {text: 'Print', icon: <Print/>, onClick: () => console.log('Print action called!')}
];

const ExampleComponent = props => (
  <tr className={styles.previewWrapper}>
    <TableActionCell {...props}/>
  </tr>
);

ExampleComponent.displayName = 'TableActionCell';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: ExampleComponent,

  componentPath: '../../src/TableActionCell/TableActionCell.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    primaryAction: primaryActionOptions1,
    secondaryActions: secondaryActionsOption,
    numOfVisibleSecondaryActions: 2,
    alwaysShowSecondaryActions: true
  },

  exampleProps: {
    primaryAction: [
      {label: 'No primary action', value: null},
      {label: 'Blue primary action', value: primaryActionOptions1},
      {label: 'White primary action', value: primaryActionOptions2}
    ],
    secondaryActions: [
      {label: 'No secondary actions', value: []},
      {label: '4 secondary actions', value: secondaryActionsOption}
    ]
  },

  // Only primary (blue)
  // Only primary (white)

  // Primary (white) and secondary (1 visible)
  // Primary (blue) and secondary (0 visible)

  // Always visible secondaries (2 visible)
  // Only visible secondary

  examples: (
    <div className={styles.examples}>
      <div className={styles.example}>
        <CodeExample title="Blue primary action" code={PrimaryBlueExampleRaw}>
          <PrimaryBlueExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="White primary action" code={PrimaryWhiteExampleRaw}>
          <PrimaryWhiteExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="Primary action and secondary actions" code={PrimarySecondaryExampleRaw}>
          <PrimarySecondaryExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="Primary action and hidden secondary action" code={PrimarySecondaryHiddenExampleRaw}>
          <PrimarySecondaryHiddenExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="Always visible secondary actions" code={AlwaysVisibleSecondaryExampleRaw}>
          <AlwaysVisibleSecondaryExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="Only secondary actions" code={OnlySecondaryExampleRaw}>
          <OnlySecondaryExample/>
        </CodeExample>
      </div>

      <div className={styles.example}>
        <CodeExample title="Only visible secondary actions" code={OnlyVisibleSecondaryExampleRaw}>
          <OnlyVisibleSecondaryExample/>
        </CodeExample>
      </div>
    </div>
  )
};