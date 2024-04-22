declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    inputClass: StringConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    wrapperClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    inputClass: StringConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    wrapperClass: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: boolean;
}, {}>;
export default _default;
