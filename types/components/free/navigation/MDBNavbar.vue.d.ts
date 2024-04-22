declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    bg: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    double: {
        type: BooleanConstructor;
        default: boolean;
    };
    expand: StringConstructor;
    position: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollingOffset: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    container: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    classContainer: StringConstructor;
    classNavbar: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    bg: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    double: {
        type: BooleanConstructor;
        default: boolean;
    };
    expand: StringConstructor;
    position: StringConstructor;
    transparent: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollingOffset: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    container: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    classContainer: StringConstructor;
    classNavbar: StringConstructor;
}>>, {
    container: string | boolean;
    tag: string;
    light: boolean;
    dark: boolean;
    transparent: boolean;
    center: boolean;
    double: boolean;
    scrolling: boolean;
    scrollingOffset: number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
