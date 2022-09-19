declare function MDBFocusTrap(): {
    initFocusTrap: (element?: HTMLElement | HTMLBodyElement | string) => boolean;
    removeFocusTrap: () => void;
};
export default MDBFocusTrap;
