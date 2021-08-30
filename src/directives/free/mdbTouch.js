const handlers = {
  doubleTap: (e, data) => {
    data.startTouch = data.touch;
    data.touch = e;
    data.origin = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
    if (
      data.startTouch &&
      data.touch.timeStamp - data.startTouch.timeStamp < 300
    ) {
      data.callback({ origin: data.origin });
    }
  },
  swipe: (e, data) => {
    if (!data.modifiers.carousel) e.preventDefault();

    if (e.type === "touchstart") {
      data.startTouch = e;
    } else if (e.type === "touchmove" && data.startTouch) {
      data.touch = e;
    } else if (e.type === "touchend" && data.touch) {
      const movementX =
        data.touch.touches[0].clientX - data.startTouch.touches[0].clientX;

      const movementY =
        data.touch.touches[0].clientY - data.startTouch.touches[0].clientY;

      let direction =
        movementX > 50
          ? "right"
          : movementX < -50
          ? "left"
          : movementY < -50
          ? "up"
          : movementY > 50
          ? "down"
          : false;

      if (data.modifiers.right && movementX > 50) data.callback();

      if (data.modifiers.left && movementX < -50) data.callback();

      if (data.modifiers.down && movementY > 50) data.callback();

      if (data.modifiers.up && movementY < -50) data.callback();

      if (
        direction &&
        !data.modifiers.up &&
        !data.modifiers.left &&
        !data.modifiers.down &&
        !data.modifiers.right
      )
        data.callback(direction);

      data.startTouch = null;
      data.touch = null;
    }
  },
  pinch(e, data) {
    if (e.touches.length < 2 && e.type !== "touchend") return;

    e.preventDefault();

    if (e.type === "touchstart") {
      const [touch1, touch2] = e.touches;
      data.startTouch = Math.sqrt(
        (touch2.clientX - touch1.clientX) ** 2 +
          (touch2.clientY - touch1.clientY) ** 2
      );
      data.origin = {
        x: touch1.clientX + (touch2.clientX - touch1.clientX) / 2,
        y: touch1.clientY + (touch2.clientY - touch1.clientY) / 2
      };
    } else if (e.type === "touchmove") {
      const [touch1, touch2] = e.touches;

      data.touch = Math.sqrt(
        (touch2.clientX - touch1.clientX) ** 2 +
          (touch2.clientY - touch1.clientY) ** 2
      );
    } else if (
      e.type === "touchend" &&
      typeof data.touch === "number" &&
      typeof data.startTouch === "number"
    ) {
      const ratio = data.touch / data.startTouch;

      data.callback({ ratio, origin: data.origin });
    }

    return;
  },

  longTap(e, data) {
    e.preventDefault();

    if (e.type === "touchstart") {
      data.startTouch = e;
      data.timeout = setTimeout(() => {
        data.callback();
        data.timeout = "complete";
      }, 1000);
    } else if (e.type === "touchend") {
      clearTimeout(data.timeout);
      e.timeStamp - data.startTouch.timeStamp > 1000 &&
        data.timeout !== "complete" &&
        data.callback();
    }
  },

  pan(e, data) {
    e.preventDefault();
    if (e.type === "touchstart") {
      data.startTouch = e;
    } else if (e.type === "touchmove") {
      data.touch = e;

      const movementX =
        data.touch.touches[0].clientX - data.startTouch.touches[0].clientX;

      const movementY =
        data.touch.touches[0].clientY - data.startTouch.touches[0].clientY;

      data.callback({ x: movementX, y: movementY });
      data.startTouch = data.touch;
    }
  }
};

export default {
  mounted(el, binding) {
    if (binding.value === false) return;

    const { arg, modifiers } = binding;

    const data = {
      startTouch: null,
      touch: null,
      timeout: null,
      origin: { x: 0, y: 0 },
      modifiers,
      callback: binding.value
    };

    el.addEventListener("touchstart", e => handlers[arg](e, data), {
      passive: false
    });

    if (arg !== "doubleTap") {
      el.addEventListener("touchmove", e => handlers[arg](e, data), {
        passive: false
      });

      el.addEventListener("touchend", e => handlers[arg](e, data), {
        passive: false
      });
    }
  },
  unmounted(el, binding) {
    if (binding.value === false) return;

    const { arg } = binding;

    el.removeEventListener("touchstart", handlers[arg]);
    el.removeEventListener("touchend", handlers[arg]);
    el.removeEventListener("touchmove", handlers[arg]);
  }
};
