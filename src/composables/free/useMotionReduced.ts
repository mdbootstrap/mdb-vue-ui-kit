export const useMotionReduced = (): boolean => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return false; // default to false if not supported
};
