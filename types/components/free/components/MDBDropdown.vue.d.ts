import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    boundary: {
        type: StringConstructor;
        default: string;
    };
    btnGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropup: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropend: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropstart: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<string | string[]>;
        default: string;
    };
    offset: {
        type: PropType<string | number[] | (() => string | number[])>;
        default: () => number[];
    };
    popperConfig: PropType<Object | Function>;
    target: StringConstructor;
    modelValue: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    boundary: {
        type: StringConstructor;
        default: string;
    };
    btnGroup: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropup: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropend: {
        type: BooleanConstructor;
        default: boolean;
    };
    dropstart: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<string | string[]>;
        default: string;
    };
    offset: {
        type: PropType<string | number[] | (() => string | number[])>;
        default: () => number[];
    };
    popperConfig: PropType<Object | Function>;
    target: StringConstructor;
    modelValue: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: boolean;
    align: string | string[];
    offset: string | number[] | (() => string | number[]);
    boundary: string;
    btnGroup: boolean;
    dropup: boolean;
    dropend: boolean;
    dropstart: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
