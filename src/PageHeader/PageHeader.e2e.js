import eyes from 'eyes.it';

import {pageHeaderTestkitFactory} from '../../testkit/protractor';
import {waitForVisibilityOf, scrollToElement} from 'wix-ui-test-utils/protractor';
import {createStoryUrl} from '../../test/utils/storybook-helpers';

import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';
import {storySettings} from '../../stories/PageHeader/storySettings';


describe('PageHeader', async () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.category,
    story: storySettings.storyName,
    withExamples: false
  });

  const dataHook = 'story-page-header';

  const initTest = async ({props}) => {
    await browser.get(storyUrl);
    const driver = pageHeaderTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    await scrollToElement(driver.element());
    props && (await autoExampleDriver.setProps(props));
    return driver;
  };


  describe('Title only', async () => {
    eyes.it('should display title without ellipsis', () => {
      initTest({title: 'Page Title very very long that should be ellipsed'});
    });

    eyes.it('should disaply an aellipsed title', () => {
      initTest({title: 'Page Title very very long that should be ellipsed'});
    });

  });

});
