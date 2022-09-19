declare function MDBPopper(): {
    setPopper: (trigger: HTMLElement, popper: HTMLElement, config: object) => void;
    togglePopper: () => void;
    isPopperActive: import("vue").Ref<boolean>;
    openPopper: () => void;
    closePopper: () => void;
    updatePopper: (option: string, value: any) => void;
    destroyPopper: () => void;
    getPopperOffset: (offset: unknown, element: HTMLElement) => unknown;
};
export default MDBPopper;
