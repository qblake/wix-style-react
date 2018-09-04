# `FocusableHOC`

Use this HOC to spread the focusable focus states onto the a component's root element.

## Usage

1. Wrap your component with `withFocusable` hoc.
2. Pass `focusableOnFocus`, `focusableOnBlur` from props to component and `focusableState` aswell.

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```

3. In `.scss` file make sure to include focus styles as in example.

```scss
@import "../common.scss";
@import "../common/Focusable/Focusable";

.root {
  outline: none;

  &#{$focusable-focus-visible} {
    @include FocusBox;

    &.hasError {
      @include FocusBoxError;
    }
  }
}
```

> Make sure to disable native browser outline by applying outline: none;

## Testing

1. In order to run general focusable tests - method `runFocusTests` is available in `FocusableTestsE2E.js`.

```jsx
import { runFocusTests } from "../common/Focusable/FocusableTestsE2E";

describe("Component", () => {
  describe("Focus tests", () => {
    const driver = TestkitFactory({ dataHook: storySettings.dataHook });
    runFocusTests(driver, storyUrl);
  });
});
```

2. By default the example above will not work. You will need to merge your testkit driver together with focusable driver for it to access specific methods.

```js
import { mergeDrivers } from "./test/utils/private-drivers";
import focusableDriverFactory from "./common/Focusable/Focusable.protractor.driver";

const DriverFactory = element => {
  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [element]
  });
  const publicDriver = {
    click: () => element.click(),
    element: () => element
  };
  return mergeDrivers(publicDriver, focusableDriver);
};

export default DriverFactory;
```

## Troubleshooting

1. Focus effect does not appear on my `div`. Why?

By default focusable hoc will only work on focusable html elements like `button`, `input` etc. In order to enable this on div make sure to pass `tabindex` to your component with value `0`. Read more https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  tabIndex={0}
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```
