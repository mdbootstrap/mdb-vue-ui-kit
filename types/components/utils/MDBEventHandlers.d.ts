export declare const on: (element: HTMLElement | Document | HTMLBodyElement | Window, event: string, handler: EventListenerOrEventListenerObject, delegationFn?: EventListenerOrEventListenerObject) => void;
export declare const off: (element: HTMLElement | Document | HTMLBodyElement | Window, event: string, handler: EventListenerOrEventListenerObject, delegationFn?: EventListenerOrEventListenerObject) => void;
export declare const onMulti: (element: HTMLElement | Document | HTMLBodyElement | Window, eventArray: string, handler: EventListenerOrEventListenerObject, delegationFn?: EventListenerOrEventListenerObject) => void;
export declare const offMulti: (element: HTMLElement | Document | HTMLBodyElement | Window, eventArray: string, handler: EventListenerOrEventListenerObject, delegationFn?: EventListenerOrEventListenerObject) => void;