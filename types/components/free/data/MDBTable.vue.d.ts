declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    variant: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    align: StringConstructor;
    sm: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableStyle: StringConstructor;
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    variant: StringConstructor;
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    borderless: {
        type: BooleanConstructor;
        default: boolean;
    };
    striped: {
        type: BooleanConstructor;
        default: boolean;
    };
    hover: {
        type: BooleanConstructor;
        default: boolean;
    };
    responsive: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    align: StringConstructor;
    sm: {
        type: BooleanConstructor;
        default: boolean;
    };
    tableStyle: StringConstructor;
    captionTop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    tag: string;
    borderless: boolean;
    light: boolean;
    dark: boolean;
    border: string | boolean;
    hover: boolean;
    sm: boolean;
    striped: boolean;
    responsive: string | boolean;
    captionTop: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
