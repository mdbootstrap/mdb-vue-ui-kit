type TrapElement = HTMLElement | HTMLBodyElement;
export interface FocusTrapInstance {
    initFocusTrap: (element: TrapElement) => boolean;
    removeFocusTrap: () => void;
}
declare function MDBFocusTrap(): FocusTrapInstance;
export default MDBFocusTrap;
