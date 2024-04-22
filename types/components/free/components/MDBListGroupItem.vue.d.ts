declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    action: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    noBorder: BooleanConstructor;
    spacing: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    ripple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    action: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    noBorder: BooleanConstructor;
    spacing: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    ripple: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
}>>, {
    tag: string;
    disabled: boolean;
    active: boolean;
    ripple: boolean | Record<string, any>;
    action: boolean;
    noBorder: boolean;
    spacing: string | boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
