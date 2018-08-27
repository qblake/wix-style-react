import textDriverFactory from '../Text/Text.driver';
import tooltipDriverFactory from '../Tooltip/Tooltip.driver';


const addItemDriverFactory = ({element, eventTrigger}) => {
  const byHook = hook => element.querySelector(`[data-hook*="${hook}"]`);
  const tooltipDriver = () => tooltipDriverFactory({element: byHook('additem-tooltip')});
  return {
    exists: () => !!element,
    element: () => element,
    getText: () => textDriverFactory({element: byHook('additem-text')}).getText(),
    textExists: () => textDriverFactory({element: byHook('additem-text')}).exists(),
    getTooltipDriver: () => tooltipDriver(),
    getTooltipContent: () => tooltipDriver().hoverAndGetContent(),
    click: () => eventTrigger.click(element)
  };
};

export default addItemDriverFactory;


