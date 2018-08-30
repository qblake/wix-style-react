import eyes from 'eyes.it';

import {waitForVisibilityOf} from 'wix-ui-test-utils/protractor';
import {pageHeaderTestkitFactory} from '../../testkit/protractor';
import {createTestStoryUrl} from '../../test/utils/storybook-helpers';

import {storySettings} from '../../stories/PageHeader/storySettings';

describe('PageHeader', async () => {
  const testStoryUrl = testName => createTestStoryUrl({...storySettings, testName});

  const dataHook = 'story-page-header';

  const initTest = async testName => {
    await browser.get(testStoryUrl(testName));
    const driver = pageHeaderTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find PageHeader');
    return driver;
  };


  describe('Title only', async () => {
    eyes.it('should disaply an ellipsed title and subtitle', async () => {
      await initTest('1. Ellipsed Title and Subtitle', {
        title: 'Page Title very very long that should be ellipsed. very veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery very',
        subtitle: 'Page SubTitle very very long that should be ellipsed. very veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery veryvery very'
      });
    });

  });

});
