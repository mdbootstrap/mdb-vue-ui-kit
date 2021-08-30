export const handleBreakpoints = (windowWidth, breakpointValues) => {
  const breakpoints = {
    none: {
      width: 0,
      align: null
    },
    sm: {
      width: 576,
      align: null
    },
    md: {
      width: 768,
      align: null
    },
    lg: {
      width: 992,
      align: null
    },
    xl: {
      width: 1200,
      align: null
    },
    xxl: {
      width: 1400,
      align: null
    },
    mega: {
      width: 10000,
      align: null
    }
  };

  // replace breakpoints align values with corresponding props values
  breakpointValues.forEach(value => {
    const match = Object.keys(breakpoints).filter(breakpoint =>
      value.includes(breakpoint) ? breakpoint : false
    )[0];
    if (match) {
      breakpoints[match].align = value;
    } else {
      breakpoints.none.align = value;
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
      (breakpoints[acc].align && breakpoints[cur].align) ||
      (breakpoints[acc].align && !cur)
    ) {
      ranges[breakpoints[acc].align] = {
        min: breakpoints[acc].width,
        max: breakpoints[cur].width
      };
      return cur;
    } else if (breakpoints[acc].align && !breakpoints[cur].align) {
      if (index === Object.keys(breakpoints).length - 1) {
        ranges[breakpoints[acc].align] = {
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
