import React from 'react';
import {storiesOf} from '@storybook/react';

import CodeExample from 'wix-storybook-utils/CodeExample';
import ControlledBadgeGroupLayoutExample from './Example';
import ControlledBadgeGroupLayoutExampleRaw from '!raw-loader!./Example';

storiesOf('12. Other', module)
  .add('12.2 BadgeGroupLayout', () =>
    <div>
      <CodeExample title="BadgeGroupLayout" code={ControlledBadgeGroupLayoutExampleRaw}>
        <ControlledBadgeGroupLayoutExample/>
      </CodeExample>
    </div>
  );
