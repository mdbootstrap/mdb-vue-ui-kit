import { PropType } from "vue";
export declare const MDBFileList: ObjectConstructor | {
    new (): FileList;
    prototype: FileList;
};
declare const _default: import("vue").DefineComponent<{
    id: StringConstructor;
    inputClass: StringConstructor;
    invalidFeedback: StringConstructor;
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isValidated: BooleanConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: {
        type: PropType<FileList | File[]>;
        default: () => never[];
    };
    size: StringConstructor;
    tooltipFeedback: BooleanConstructor;
    validFeedback: StringConstructor;
    validateOnChange: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "on-validate": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    inputClass: StringConstructor;
    invalidFeedback: StringConstructor;
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isValidated: BooleanConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: {
        type: PropType<FileList | File[]>;
        default: () => never[];
    };
    size: StringConstructor;
    tooltipFeedback: BooleanConstructor;
    validFeedback: StringConstructor;
    validateOnChange: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-validate"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: FileList | File[];
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    validateOnChange: boolean;
    isInvalid: boolean;
}, {}>;
export default _default;
