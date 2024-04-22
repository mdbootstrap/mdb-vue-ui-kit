declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    id: StringConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    modelValue: (StringConstructor | NumberConstructor)[];
    size: StringConstructor;
    formOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: StringConstructor;
    inputGroup: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formText: StringConstructor;
    white: BooleanConstructor;
    validationEvent: StringConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    helper: StringConstructor;
    counter: BooleanConstructor;
    maxLength: {
        type: NumberConstructor;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "on-validate": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    modelValue: (StringConstructor | NumberConstructor)[];
    size: StringConstructor;
    formOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: StringConstructor;
    inputGroup: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formText: StringConstructor;
    white: BooleanConstructor;
    validationEvent: StringConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    helper: StringConstructor;
    counter: BooleanConstructor;
    maxLength: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
}, {
    tag: string;
    wrap: boolean;
    maxLength: number;
    white: boolean;
    formOutline: boolean;
    inputGroup: string | boolean;
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    counter: boolean;
    rows: string | number;
}, {}>, {
    default?(_: {}): any;
    prepend?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
