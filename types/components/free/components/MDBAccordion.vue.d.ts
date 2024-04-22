declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    stayOpen: BooleanConstructor;
    flush: BooleanConstructor;
    classes: StringConstructor;
    borderless: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    stayOpen: BooleanConstructor;
    flush: BooleanConstructor;
    classes: StringConstructor;
    borderless: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: string;
    stayOpen: boolean;
    flush: boolean;
    borderless: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
