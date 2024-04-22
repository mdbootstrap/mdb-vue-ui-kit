import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: BooleanConstructor;
    reference: StringConstructor;
    popover: StringConstructor;
    options: {
        type: PropType<Function | {
            [props: string]: any;
        }>;
        default(): {};
    };
    boundary: {
        type: StringConstructor;
        default: string;
    };
    fallbackPlacements: {
        type: PropType<string[]>;
        default: () => string[];
    };
    offset: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: BooleanConstructor;
    reference: StringConstructor;
    popover: StringConstructor;
    options: {
        type: PropType<Function | {
            [props: string]: any;
        }>;
        default(): {};
    };
    boundary: {
        type: StringConstructor;
        default: string;
    };
    fallbackPlacements: {
        type: PropType<string[]>;
        default: () => string[];
    };
    offset: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    maxWidth: {
        type: NumberConstructor;
        default: number;
    };
    arrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    tag: string;
    modelValue: boolean;
    disabled: boolean;
    offset: string;
    boundary: string;
    options: {};
    fallbackPlacements: string[];
    direction: string;
    maxWidth: number;
    arrow: boolean;
}, {}>, {
    reference?(_: {}): any;
    tip?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
