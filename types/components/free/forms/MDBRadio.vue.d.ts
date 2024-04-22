declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    label: StringConstructor;
    inline: BooleanConstructor;
    modelValue: StringConstructor;
    wrapperClass: StringConstructor;
    labelClass: StringConstructor;
    btnCheck: BooleanConstructor;
    required: BooleanConstructor;
    validateOnChange: BooleanConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "on-validate": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    label: StringConstructor;
    inline: BooleanConstructor;
    modelValue: StringConstructor;
    wrapperClass: StringConstructor;
    labelClass: StringConstructor;
    btnCheck: BooleanConstructor;
    required: BooleanConstructor;
    validateOnChange: BooleanConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
}, {
    tag: string;
    required: boolean;
    wrap: boolean;
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    inline: boolean;
    btnCheck: boolean;
    validateOnChange: boolean;
    formCheck: boolean;
}, {}>;
export default _default;
