type EventHandler = ((...args: any) => void) | undefined;
export declare const on: (element: HTMLElement | Document | HTMLBodyElement | Window, event: string, handler: EventHandler, delegationFn?: EventHandler) => void;
export declare const one: (element: HTMLElement | Document | HTMLBodyElement | Window, event: string, handler: EventHandler, delegationFn?: EventHandler) => void;
export declare const off: (element: HTMLElement | Document | HTMLBodyElement | Window, event: string, handler: EventHandler, delegationFn?: EventHandler) => void;
export declare const onMulti: (element: HTMLElement | Document | HTMLBodyElement | Window, eventArray: string, handler: EventHandler, delegationFn?: EventHandler) => void;
export declare const offMulti: (element: HTMLElement | Document | HTMLBodyElement | Window, eventArray: string, handler: EventHandler, delegationFn?: EventHandler) => void;
export {};
