declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    size: StringConstructor;
    vertical: BooleanConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: StringConstructor;
    vertical: BooleanConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
    role: string;
    vertical: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
