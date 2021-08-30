export const handleBreakpoints = (windowWidth, breakpointValues) => {
  const breakpoints = {
    none: {
      width: 0,
      attr: null
    },
    sm: {
      width: 576,
      attr: null
    },
    md: {
      width: 768,
      attr: null
    },
    lg: {
      width: 992,
      attr: null
    },
    xl: {
      width: 1200,
      attr: null
    },
    xxl: {
      width: 1400,
      attr: null
    },
    mega: {
      width: 10000,
      attr: null
    }
  };

  // replace breakpoints attr values with corresponding props values
  breakpointValues.forEach(value => {
    const match = Object.keys(breakpoints).filter(breakpoint =>
      value.includes(breakpoint) ? breakpoint : false
    )[0];
    if (match) {
      breakpoints[match].attr = value;
    } else {
      breakpoints.none.attr = value;
    }
  });

  // create range object that holds props value
  // and its min and max window width range
  // ranges = {
  //   default: {
  //     min: 0,
  //     max: 768
  //   },
  //   afterMd: {
  //     min:768,
  //     max: 1200
  //   },
  //   afterXl: {
  //     min: 1200,
  //     max: 10000
  //   }
  // }

  const ranges = {};
  Object.keys(breakpoints).reduce((acc, cur, index) => {
    if (
      (breakpoints[acc].attr && breakpoints[cur].attr) ||
      (breakpoints[acc].attr && !cur)
    ) {
      ranges[breakpoints[acc].attr] = {
        min: breakpoints[acc].width,
        max: breakpoints[cur].width
      };
      return cur;
    } else if (breakpoints[acc].attr && !breakpoints[cur].attr) {
      if (index === Object.keys(breakpoints).length - 1) {
        ranges[breakpoints[acc].attr] = {
          min: breakpoints[acc].width,
          max: breakpoints[cur].width
        };
      }
      return acc;
    }
  });

  // return single value that matches actual window width range
  const value = Object.keys(ranges).filter(key => {
    if (windowWidth > ranges[key].min && windowWidth < ranges[key].max) {
      return key;
    }
  })[0];

  return value;
};
