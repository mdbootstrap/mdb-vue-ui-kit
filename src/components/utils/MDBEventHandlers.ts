type EventHandler = ((...args: any) => void) | undefined;
type TypeEvent = [boolean, EventHandler, string];

const stripNameRegex = /\..*/;
const customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout",
};
const nativeEvents = [
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll",
];

function normalizeParams(
  originalTypeEvent: string,
  handler: EventHandler,
  delegationFn: EventHandler
): TypeEvent {
  const delegation = typeof handler === "string";
  const originalHandler = delegation ? delegationFn : handler;

  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  let typeEvent = originalTypeEvent.replace(stripNameRegex, "");
  const custom = customEvents[typeEvent as keyof typeof customEvents];

  if (custom) {
    typeEvent = custom;
  }

  const isNative = nativeEvents.indexOf(typeEvent) > -1;

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function addHandler(
  element: HTMLElement | Document | HTMLBodyElement | Window,
  originalTypeEvent: string,
  handler: EventHandler,
  delegationFn: EventHandler
) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = undefined;
  }

  const [delegation, originalHandler, typeEvent] = normalizeParams(
    originalTypeEvent,
    handler,
    delegationFn
  );
  element.addEventListener(
    typeEvent,
    originalHandler as EventListenerOrEventListenerObject,
    delegation
  );
}

function removeHandler(
  element: HTMLElement | Document | HTMLBodyElement | Window,
  typeEvent: string,
  handler: EventHandler,
  delegationSelector: EventHandler
) {
  element.removeEventListener(
    typeEvent,
    handler as EventListenerOrEventListenerObject,
    !!delegationSelector
  );
}

export const on = function (
  element: HTMLElement | Document | HTMLBodyElement | Window,
  event: string,
  handler: EventHandler,
  delegationFn: EventHandler = undefined
) {
  addHandler(element, event, handler, delegationFn);
};

export const one = function (
  element: HTMLElement | Document | HTMLBodyElement | Window,
  event: string,
  handler: EventHandler,
  delegationFn: EventHandler = undefined
) {
  if (typeof event !== "string" || !element) {
    return;
  }

  const [_, originalHandler, typeEvent] = normalizeParams(
    event,
    handler,
    delegationFn
  );

  element.addEventListener(
    typeEvent,
    originalHandler as EventListenerOrEventListenerObject,
    { once: true }
  );
};

export const off = function (
  element: HTMLElement | Document | HTMLBodyElement | Window,
  event: string,
  handler: EventHandler,
  delegationFn: EventHandler = undefined
) {
  if (typeof event !== "string" || !element) {
    return;
  }

  const [delegation, originalHandler, typeEvent] = normalizeParams(
    event,
    handler,
    delegationFn
  );

  removeHandler(
    element,
    typeEvent,
    originalHandler,
    delegation ? handler : undefined
  );
};

export const onMulti = function (
  element: HTMLElement | Document | HTMLBodyElement | Window,
  eventArray: string,
  handler: EventHandler,
  delegationFn: EventHandler = undefined
) {
  const events = eventArray.split(" ");

  for (let i = 0; i < events.length; i++) {
    on(element, events[i], handler, delegationFn);
  }
};

export const offMulti = function (
  element: HTMLElement | Document | HTMLBodyElement | Window,
  eventArray: string,
  handler: EventHandler,
  delegationFn: EventHandler = undefined
) {
  const events = eventArray.split(" ");

  for (let i = 0; i < events.length; i++) {
    off(element, events[i], handler, delegationFn);
  }
};
