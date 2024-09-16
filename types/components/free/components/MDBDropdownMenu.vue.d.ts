declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    fadeIn: {
        type: StringConstructor;
        default: string;
    };
    fadeOut: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    filter: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    fadeIn: {
        type: StringConstructor;
        default: string;
    };
    fadeOut: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    static: {
        type: BooleanConstructor;
        default: boolean;
    };
    filter: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    filter: boolean;
    tag: string;
    dark: boolean;
    fadeIn: string;
    fadeOut: string;
    animation: boolean;
    static: boolean;
}, {}>, {
    default?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
