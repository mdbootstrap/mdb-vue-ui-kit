export interface Props {
    modelValue: boolean;
    animation: boolean;
    staticBackdrop: boolean;
    size: string | undefined;
    centered: boolean | string;
    scrollable: boolean;
    fullscreen: boolean | string;
    dialogClasses: string | undefined;
    removeBackdrop: boolean;
    keepOverflow: boolean;
    bgSrc: string;
    keyboard: boolean;
    focus: boolean;
    duration: number;
    labelledby: string;
    tag: string;
}
export default function useMDBModal(props: Partial<Props>, emit: (...args: any[]) => void): {
    wrapperClass: import("vue").ComputedRef<(string | false | undefined)[]>;
    dialogClass: import("vue").ComputedRef<(string | false | string[] | undefined)[]>;
    backdropStyle: import("vue").ComputedRef<false | {
        "background-color": string;
    }>;
    backdropOverflowStyle: import("vue").ComputedRef<"overflow: hidden" | undefined>;
    computedContentStyle: import("vue").ComputedRef<{
        "background-image": string;
    } | {
        "background-image"?: undefined;
    }>;
    root: import("vue").Ref<string | HTMLElement>;
    dialog: import("vue").Ref<string | HTMLElement>;
    isActive: import("vue").Ref<boolean | undefined>;
    closeModal: () => void;
    animateStaticBackdrop: () => void;
    enter: (el: Element) => void;
    afterEnter: (el: Element) => void;
    beforeLeave: (el: Element) => void;
    afterLeave: () => void;
    scrollbarWidth: import("vue").Ref<number>;
    setScrollbar: () => void;
    shouldOverflow: import("vue").Ref<boolean>;
    thisElement: import("vue").Ref<string | HTMLElement | null>;
    handleEscKeyUp: (e: KeyboardEvent) => void;
    focusTrap: import("vue").Ref<{
        initFocusTrap: (element: HTMLElement | HTMLBodyElement) => boolean;
        removeFocusTrap: () => void;
    } | null>;
    dialogTransform: import("vue").Ref<string>;
    animateStaticModal: (el: HTMLElement) => void;
    fullscreenClass: import("vue").ComputedRef<false | string[]>;
    clickFromBackdrop: import("vue").Ref<boolean>;
    isOnlyNonInvasiveModal: () => void;
    onlyNonInvasiveModal: import("vue").Ref<boolean>;
};
