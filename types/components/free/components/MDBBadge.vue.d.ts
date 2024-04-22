declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    badge: StringConstructor;
    color: StringConstructor;
    pill: BooleanConstructor;
    dot: BooleanConstructor;
    notification: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    attrs: {
        [x: string]: unknown;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    badge: StringConstructor;
    color: StringConstructor;
    pill: BooleanConstructor;
    dot: BooleanConstructor;
    notification: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
    pill: boolean;
    dot: boolean;
    notification: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
