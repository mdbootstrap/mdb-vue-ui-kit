declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    inputClass: StringConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    thumb: {
        type: BooleanConstructor;
        default: boolean;
    };
    thumbClass: StringConstructor;
    wrapperClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    inputClass: StringConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    thumb: {
        type: BooleanConstructor;
        default: boolean;
    };
    thumbClass: StringConstructor;
    wrapperClass: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: number;
    max: number;
    min: number;
    thumb: boolean;
}, {}>;
export default _default;
