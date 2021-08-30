const bsColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark"
];
const gradient =
  "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
const defaultColor = [0, 0, 0];
const transitionBreakOpacity = 0.5;

const isBSColor = propColor => bsColors.includes(propColor.toLowerCase());

const colorToRGB = (color, defaultColor) => {
  const hexToRgb = color => {
    const HEX_COLOR_LENGTH = 7;
    const IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;
    if (IS_SHORT_HEX) {
      color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    return [
      parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16)
    ];
  };

  const namedColorsToRgba = color => {
    const tempElem = document.body.appendChild(
      document.createElement("fictum")
    );
    const flag = "rgb(1, 2, 3)";
    tempElem.style.color = flag;

    if (tempElem.style.color !== flag) {
      return defaultColor;
    }
    tempElem.style.color = color;

    if (tempElem.style.color === flag || tempElem.style.color === "") {
      return defaultColor;
    }
    color = getComputedStyle(tempElem).color;
    document.body.removeChild(tempElem);

    return color;
  };

  const rgbaToRgb = color => {
    color = color.match(/[.\d]+/g).map(a => +Number(a));
    color.length = 3;
    return color;
  };

  if (color.toLowerCase() === "transparent") {
    return defaultColor;
  }
  if (color[0] === "#") {
    return hexToRgb(color);
  }
  if (color.indexOf("rgb") === -1) {
    color = namedColorsToRgba(color);
  }
  if (color.indexOf("rgb") === 0) {
    return rgbaToRgb(color);
  }

  return defaultColor;
};

const getDiameter = ({ offsetX, offsetY, height, width }) => {
  const top = offsetY <= height / 2;
  const left = offsetX <= width / 2;
  const pythagorean = (sideA, sideB) => Math.sqrt(sideA ** 2 + sideB ** 2);

  const positionCenter = offsetY === height / 2 && offsetX === width / 2;
  const quadrant = {
    first: top === true && left === false,
    second: top === true && left === true,
    third: top === false && left === true,
    fourth: top === false && left === false
  };

  const getCorner = {
    topLeft: pythagorean(offsetX, offsetY),
    topRight: pythagorean(width - offsetX, offsetY),
    bottomLeft: pythagorean(offsetX, height - offsetY),
    bottomRight: pythagorean(width - offsetX, height - offsetY)
  };

  let diameter = 0;

  if (positionCenter || quadrant.fourth) {
    diameter = getCorner.topLeft;
  } else if (quadrant.third) {
    diameter = getCorner.topRight;
  } else if (quadrant.second) {
    diameter = getCorner.bottomRight;
  } else if (quadrant.first) {
    diameter = getCorner.bottomLeft;
  }
  return diameter * 2;
};

const setStyles = (el, styles) => {
  for (const property in styles) {
    el.style[property] = styles[property];
  }
};

const getBackgroundImage = color => {
  if (color !== "") {
    const rgbValue = colorToRGB(color, defaultColor).join(",");
    const gradientImage = gradient.split("{{color}}").join(`${rgbValue}`);
    return `radial-gradient(circle, ${gradientImage})`;
  }
};

const runRipple = (el, waveConfig, options) => {
  const rippleElement = document.createElement("div");
  rippleElement.classList.add("ripple-wave");

  const diameterConfig = {
    offsetX: options.centered ? waveConfig.height / 2 : waveConfig.left,
    offsetY: options.centered ? waveConfig.width / 2 : waveConfig.top,
    height: waveConfig.height,
    width: waveConfig.width
  };
  const diameter = getDiameter(diameterConfig);
  const radiusValue = options.radius || diameter / 2;
  const opacity = {
    delay: options.duration * transitionBreakOpacity,
    duration: options.duration - options.duration * transitionBreakOpacity
  };

  const styles = {
    left: options.centered
      ? `${Math.round(waveConfig.width / 2 - radiusValue)}px`
      : `${Math.round(waveConfig.left - radiusValue)}px`,
    top: options.centered
      ? `${Math.round(waveConfig.height / 2 - radiusValue)}px`
      : `${Math.round(waveConfig.top - radiusValue)}px`,
    height: `${Math.round(options.radius * 2 || diameter)}px`,
    width: `${Math.round(options.radius * 2 || diameter)}px`,
    transitionDelay: `0s, ${opacity.delay}ms`,
    transitionDuration: `${options.duration}ms, ${opacity.duration}ms`
  };

  if (options.unbound) {
    el.classList.add("ripple-surface-unbound");
  }

  if (isBSColor(options.color)) {
    el.classList.add(`ripple-surface-${options.color}`);
  } else {
    styles.backgroundImage = getBackgroundImage(options.color);
  }

  setStyles(rippleElement, styles);
  el.appendChild(rippleElement);

  setTimeout(() => {
    rippleElement.classList.add("active");
  }, 50);

  setTimeout(() => {
    el.removeChild(rippleElement);
  }, options.duration + 1000);
};

export default {
  mounted(el, binding) {
    if (binding.value === false) {
      return;
    }

    const options = {
      centered: (binding.value && binding.value.centered) || false,
      color: (binding.value && binding.value.color) || "",
      duration: (binding.value && binding.value.duration) || 500,
      radius: (binding.value && binding.value.radius) || 0,
      unbound: (binding.value && binding.value.unbound) || false
    };

    el.classList.add("ripple-surface");
    el.waves = e => {
      const waveConfig = {
        top: e.layerY,
        left: e.layerX,
        height: el.offsetHeight,
        width: el.offsetWidth
      };
      runRipple(el, waveConfig, options);
    };

    el.addEventListener("click", el.waves);
  },

  updated(el) {
    if (!el.classList.contains("ripple-surface")) {
      el.classList.add("ripple-surface");
    }
  },

  unmounted(el) {
    el.removeEventListener("click", el.waves);
  }
};
