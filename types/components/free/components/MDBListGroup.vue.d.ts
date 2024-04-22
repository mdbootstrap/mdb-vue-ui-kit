declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    flush: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    numbered: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    light: BooleanConstructor;
    small: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    numbered: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    light: BooleanConstructor;
    small: BooleanConstructor;
}>>, {
    small: boolean;
    tag: string;
    flush: boolean;
    horizontal: string | boolean;
    light: boolean;
    numbered: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
