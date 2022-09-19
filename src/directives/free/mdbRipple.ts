import { Directive } from "vue";
import type { DirectiveBinding } from "vue";

interface DiameterOptions {
  offsetX: number;
  offsetY: number;
  height: number;
  width: number;
}

interface Styles {
  left: string;
  top: string;
  height: string;
  width: string;
  transitionDelay: string;
  transitionDuration: string;
  backgroundImage?: string;
}

interface RippleElement extends HTMLDivElement {
  waves: (e: MouseEvent) => void;
}

interface MouseEventWithLayer extends MouseEvent {
  layerY: number;
  layerX: number;
}

interface WaveTypes {
  top: number;
  left: number;
  height: number;
  width: number;
}

interface RippleOptionTypes {
  centered?: boolean;
  color: string;
  duration?: number;
  radius?: number;
  unbound?: boolean;
}

const bsColors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];
const gradient =
  "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
const defaultColor = [0, 0, 0];
const transitionBreakOpacity = 0.5;

const isBSColor = (propColor: string | undefined) =>
  propColor && bsColors.includes(propColor.toLowerCase());

const colorToRGB = (color: string | number[], defaultColor: number[]) => {
  const hexToRgb = (color: string) => {
    const HEX_COLOR_LENGTH = 7;
    const IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;
    if (IS_SHORT_HEX) {
      color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    return [
      parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16),
    ];
  };

  const namedColorsToRgba = (color: string) => {
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

  const rgbaToRgb = (color: string) => {
    const colorMatch = color.match(/[.\d]+/g);
    if (colorMatch === null) {
      return;
    }

    const colorArr: number[] = colorMatch.map((a) => +Number(a));
    colorArr.length = 3;
    return colorArr;
  };

  if (typeof color === "string" && color.toLowerCase() === "transparent") {
    return defaultColor;
  }
  if (typeof color === "string" && color[0] === "#") {
    return hexToRgb(color);
  }
  if (typeof color === "string" && color.indexOf("rgb") === -1) {
    color = namedColorsToRgba(color);
  }
  if (typeof color === "string" && color.indexOf("rgb") === 0) {
    return rgbaToRgb(color);
  }

  return defaultColor;
};

const getDiameter = ({ offsetX, offsetY, height, width }: DiameterOptions) => {
  const top = offsetY <= height / 2;
  const left = offsetX <= width / 2;
  const pythagorean = (sideA: number, sideB: number) =>
    Math.sqrt(sideA ** 2 + sideB ** 2);

  const positionCenter = offsetY === height / 2 && offsetX === width / 2;
  const quadrant = {
    first: top === true && left === false,
    second: top === true && left === true,
    third: top === false && left === true,
    fourth: top === false && left === false,
  };

  const getCorner = {
    topLeft: pythagorean(offsetX, offsetY),
    topRight: pythagorean(width - offsetX, offsetY),
    bottomLeft: pythagorean(offsetX, height - offsetY),
    bottomRight: pythagorean(width - offsetX, height - offsetY),
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

const setStyles = (el: HTMLElement, styles: Styles) => {
  for (const property in styles) {
    el.style[property] = styles[property];
  }
};

const getBackgroundImage = (color: string) => {
  const rgb = colorToRGB(color, defaultColor);
  if (color !== "" && rgb) {
    const rgbValue = rgb.join(",");
    const gradientImage = gradient.split("{{color}}").join(`${rgbValue}`);
    return `radial-gradient(circle, ${gradientImage})`;
  }
};

const runRipple = (
  el: HTMLElement,
  waveConfig: WaveTypes,
  options: RippleOptionTypes
) => {
  const rippleElement = document.createElement("div");
  rippleElement.classList.add("ripple-wave");

  const diameterConfig = {
    offsetX: options.centered ? waveConfig.height / 2 : waveConfig.left,
    offsetY: options.centered ? waveConfig.width / 2 : waveConfig.top,
    height: waveConfig.height,
    width: waveConfig.width,
  };
  const diameter = getDiameter(diameterConfig);
  const radiusValue = options.radius || diameter / 2;
  const opacity = {
    delay: options.duration && options.duration * transitionBreakOpacity,
    duration:
      options.duration &&
      options.duration - options.duration * transitionBreakOpacity,
  };

  const styles: Styles = {
    left: options.centered
      ? `${Math.round(waveConfig.width / 2 - radiusValue)}px`
      : `${Math.round(waveConfig.left - radiusValue)}px`,
    top: options.centered
      ? `${Math.round(waveConfig.height / 2 - radiusValue)}px`
      : `${Math.round(waveConfig.top - radiusValue)}px`,
    height: `${Math.round(
      (options.radius && options.radius * 2) || diameter
    )}px`,
    width: `${Math.round(
      (options.radius && options.radius * 2) || diameter
    )}px`,
    transitionDelay: `0s, ${opacity.delay}ms`,
    transitionDuration: `${options.duration}ms, ${opacity.duration}ms`,
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

  setTimeout(
    () => {
      el.removeChild(rippleElement);
    },
    options.duration ? options.duration + 1000 : 1000
  );
};

const RippleDirective: Directive = {
  mounted(el: RippleElement, binding: DirectiveBinding) {
    if (binding.value === false) {
      return;
    }

    const options: RippleOptionTypes = {
      centered: (binding.value && binding.value.centered) || false,
      color: (binding.value && binding.value.color) || "",
      duration: (binding.value && binding.value.duration) || 500,
      radius: (binding.value && binding.value.radius) || 0,
      unbound: (binding.value && binding.value.unbound) || false,
    };

    el.classList.add("ripple-surface");

    el.waves = (e: MouseEventWithLayer) => {
      const waveConfig: WaveTypes = {
        top: e.layerY,
        left: e.layerX,
        height: el.offsetHeight,
        width: el.offsetWidth,
      };
      runRipple(el, waveConfig, options);
    };

    el.addEventListener("click", (e) => el.waves(e));
  },

  updated(el: RippleElement) {
    if (!el.classList.contains("ripple-surface")) {
      el.classList.add("ripple-surface");
    }
  },

  unmounted(el: RippleElement) {
    el.removeEventListener("click", (e) => el.waves(e));
  },
};

export default RippleDirective;
