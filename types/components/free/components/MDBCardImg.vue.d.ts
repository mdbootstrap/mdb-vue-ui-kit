declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: StringConstructor;
    top: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: StringConstructor;
    top: {
        type: BooleanConstructor;
        default: boolean;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    tag: string;
    top: boolean;
    bottom: boolean;
    fluid: boolean;
    overlay: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
