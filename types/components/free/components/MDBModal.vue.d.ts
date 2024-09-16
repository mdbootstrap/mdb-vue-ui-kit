declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: BooleanConstructor;
    size: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    removeBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    staticBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    centered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgSrc: {
        type: StringConstructor;
        default: string;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    labelledby: StringConstructor;
    fullscreen: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    dialogClasses: {
        type: StringConstructor;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepOverflow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    hidden: (...args: any[]) => void;
    shown: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: BooleanConstructor;
    size: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    removeBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    staticBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    centered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgSrc: {
        type: StringConstructor;
        default: string;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    labelledby: StringConstructor;
    fullscreen: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    dialogClasses: {
        type: StringConstructor;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
    keepOverflow: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
}, {
    tag: string;
    focus: boolean;
    keyboard: boolean;
    modelValue: boolean;
    duration: number;
    animation: boolean;
    staticBackdrop: boolean;
    centered: boolean;
    scrollable: boolean;
    fullscreen: string | boolean;
    removeBackdrop: boolean;
    keepOverflow: boolean;
    bgSrc: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
