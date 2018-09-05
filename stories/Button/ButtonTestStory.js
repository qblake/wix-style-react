import React from 'react';
import {storiesOf} from '@storybook/react';
import queryString from 'querystring';
import pick from 'lodash/pick';
import {TESTS_PREFIX} from '../../stories/storyCategories';
import Button from 'wix-style-react/Button';
import Check from '../../src/new-icons/Check';
import X from '../../src/new-icons/X';

const BUTTON_PADDING = '5px';

const variants = props => (
  <div style={{display: 'flex'}}>
    <div style={{margin: '5px', border: '1px solid'}}>
      {
          [
            'transparent',
            'fullred',
            'fullgreen',
            'fullpurple',
            'emptyred',
            'emptygreen',
            'emptybluesecondary',
            'emptyblue'
          ].map((theme, index) => (
            <div
              key={index} style={{
                display: 'flex',
                width: '300px',
                alignItems: 'center'
              }}
                          >
              <span style={{flexGrow: 1, padding: '5px'}}>{theme}</span>
              <span style={{padding: BUTTON_PADDING, backgroundColor: theme.includes('white') ? 'black' : 'white'}}>
                <Button theme={theme} {...props}>Click me</Button>
              </span>
            </div>
            ))
          }
    </div>
    <div style={{margin: '10px', border: '1px solid'}}>
      {
          [
            'emptypurple',
            'fullblue',
            'login',
            'emptylogin',
            'transparentblue',
            'whiteblue',
            'whiteblueprimary',
            'whitebluesecondary'

          ].map((theme, index) => (
            <div
              key={index} style={{
                display: 'flex',
                width: '300px',
                alignItems: 'center'
              }}
                          >
              <span style={{flexGrow: 1, padding: '5px'}}>{theme}</span>
              <span style={{padding: BUTTON_PADDING, backgroundColor: theme.includes('white') ? 'black' : 'white'}}>
                <Button theme={theme} {...props}>Click me</Button>
              </span>
            </div>
            ))
          }
    </div>
    <div style={{margin: '10px', border: '1px solid'}}>
      {
          [
            'close-standard',
            'close-dark',
            'close-transparent'
          ].map((theme, index) => (
            <div
              key={index} style={{
                display: 'flex',
                width: '300px',
                alignItems: 'center'
              }}
                          >
              <span style={{flexGrow: 1, padding: '5px'}}>{theme}</span>
              <span style={{padding: BUTTON_PADDING, backgroundColor: theme.includes('white') ? 'black' : 'white'}}>
                <Button theme={theme} {...props}><X/></Button>
              </span>
            </div>
          ))
        }
      {
          [
            'icon-greybackground',
            'icon-standard',
            'icon-standardsecondary',
            'icon-white',
            'icon-whitesecondary'
          ].map((theme, index) => (
            <div
              key={index} style={{
                display: 'flex',
                width: '300px'
              }}
                          >
              <span style={{flexGrow: 1}}>{theme}</span>
              <span style={{padding: BUTTON_PADDING, backgroundColor: theme.includes('white') ? 'black' : 'white'}}>
                <Button theme={theme}><Check/></Button>
              </span>
            </div>
          ))
        }
    </div>
  </div>
);

storiesOf(`${TESTS_PREFIX}/5. Buttons`, module)
  .add('5.0 ButtonLayout', () => {
    console.log('window.location.search=', window.location.search);
    const props = pick(queryString.parse(window.location.search), Object.keys(Button.propTypes));
    console.log('props=', props);
    return (
      <div>
        <p>props={JSON.stringify(props)}</p>
        {variants(props)}
      </div>
    );
  }
);

