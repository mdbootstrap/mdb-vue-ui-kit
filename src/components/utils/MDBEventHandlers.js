export const on = function(element, event, handler) {
  if (element && event && handler) {
    document.addEventListener
      ? element.addEventListener(event, handler, false)
      : element.attachEvent("on" + event, handler);
  }
};

export const off = function(element, event, handler) {
  if (element && event) {
    document.removeEventListener
      ? element.removeEventListener(event, handler, false)
      : element.detachEvent("on" + event, handler);
  }
};
