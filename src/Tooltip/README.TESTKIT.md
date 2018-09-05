# Tooltip component

> General tooltip and popover component.

## Tooltip TestKit API

### Polyfills

Since the tests won't be ran in a browser environment, the `<Tooltip/>` component might need some
polyfills. You can use them as follows:

```javascript
import {rangePolyfill} from 'wix-style-react/dist/testkit/polyfills';

beforeAll(() => {
  rangePolyfill.install();
});
```

### Enzyme / ReactTestUtils
| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| isShown | - | boolean | true when to tooltip itself is visible |
| focus | - | - | focus on the tooltip element |
| blue | - | - | blur the tooltip element |
| click | - | - | click on the tooltip element |
| mouseEnter | - | - | simulate mouse enter the tooltip element |
| mouseLeave | - | - | simulate mouse leave the tooltip element |
| hasErrorTheme | - | boolean | true if the tooltip itself uses error theme | 
| hasDarkTheme | - | boolean | true if the tooltip itself uses dark theme | 
| hasLightTheme | - | boolean | true if the tooltip itself uses light theme | 
| hasArrow | - | boolean | true if the tooltip has an arrow | 
| getTooltipWrapper | - | element | return the wrapper that wraps the tooltip itself and the tooltip element | 
| getChildren | - | element | return the tooltip children | 
| getPlacement | - | string | return the tooltip placement | 
| getContent | - | element | return the tooltip content | 

### Puppeteer

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| element | - | element | returns the element |
| getTooltipTextContent | number | string | get the tooltip context text |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {tooltipTestkitFactory as tooltipTestkitFactory} from 'wix-style-react/dist/testkit';
  import {tooltipTestkitFactory as enzymeTooltipTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';
  import waitForCond from 'wait-for-cond';

  function waitFor(predicate, msg) {
    return waitForCond(predicate, 2000, msg);
  }

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<Tooltip dataHook={dataHook} {..._props}>{children}</Tooltip>);
  const testkit = enzymeTooltipTestkitFactory({wrapper, dataHook});

  //Do tests
  testkit.mouseEnter();
  expect(testkit.isShown()).toBeFalsy();
  return waitFor.assert(() => expect(testkit.isShown()).toBeTruthy());

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div><Tooltip dataHook={dataHook} {..._props}>{children}</Tooltip></div>)
  );
  const testkit = tooltipTestkitFactory({wrapper, dataHook});
  
  //Do tests
  testkit.mouseEnter();
  expect(testkit.isShown()).toBeFalsy();
  return waitFor.assert(() => expect(testkit.isShown()).toBeTruthy());
```

```javascript
/*******************
   puppeteer example
  *******************/

  import puppeteer from 'puppeteer';
  import {tooltipTestkitFactory} from 'wix-style-react/dist/testkit/puppeteer';

  //puppeteer setup
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Create an element testkit via the data-hook attribute
  const testkit = await tooltipTestkitFactory({dataHook: 'myDataHook', page});
  await page.goto(appUrl); //Your application url

  expect(await testkit.getTooltipTextContent()).to.equal('my test');
```
