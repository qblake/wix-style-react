import eyes from 'eyes.it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {
  waitForVisibilityOf,
  scrollToElement
} from 'wix-ui-test-utils/protractor';

import {createStoryUrl} from '../../test/utils/storybook-helpers';

import {addItemTestkitFactory} from '../../testkit/protractor';
import {storySettings} from '../../stories/AddItem/storySettings';
import {runFocusTests} from '../common/Focusable/FocusableTestsE2E';

describe('AddItem', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName
  });

  const createDriverFactory = async driver => {
    await waitForVisibilityOf(
      driver.element(),
      'Cannot find AddItem component'
    );
    await scrollToElement(driver.element());
    return driver;
  };

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(() => {
    autoExampleDriver.remount();
  });

  describe(`'alignItems' prop`, () => {
    ['', 'left', 'right'].map(alignItems =>
      eyes.it(`should render with value ${alignItems}`, async () => {
        await autoExampleDriver.setProps({
          alignItems
        });
        const driver = addItemTestkitFactory({
          dataHook: storySettings.dataHook
        });
        await createDriverFactory(driver);
      })
    );
  });

  describe(`'theme' prop`, () => {
    ['', 'filled', 'plain', 'image'].map(theme =>
      eyes.it(`should render with theme ${theme}`, async () => {
        await autoExampleDriver.setProps({
          theme
        });
        const driver = addItemTestkitFactory({
          dataHook: storySettings.dataHook
        });
        await createDriverFactory(driver);
      })
    );
  });

  describe(`'size' prop`, () => {
    ['large', 'medium', 'small', ''].map(size =>
      eyes.it(`should render with ${size} icon`, async () => {
        await autoExampleDriver.setProps({
          size
        });
        const driver = addItemTestkitFactory({
          dataHook: storySettings.dataHook
        });
        await createDriverFactory(driver);
      })
    );
  });

  describe(`'disable' prop`, () => {
    ['dashes', 'filled', 'plain', 'image'].map(theme =>
      eyes.it(`should render with theme ${theme}`, async () => {
        await autoExampleDriver.setProps({disabled: true, theme});
        const driver = addItemTestkitFactory({
          dataHook: storySettings.dataHook
        });
        await createDriverFactory(driver);
      })
    );
  });

  describe('Generic', () => {
    const driver = addItemTestkitFactory({dataHook: storySettings.dataHook});
    runFocusTests(driver, storyUrl);
  });
});
