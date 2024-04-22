import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: StringConstructor;
    size: StringConstructor;
    outline: StringConstructor;
    rounded: BooleanConstructor;
    floating: BooleanConstructor;
    toggler: BooleanConstructor;
    toggle: BooleanConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    ripple: {
        type: PropType<boolean | {
            [props: string]: string | number | boolean;
        }>;
        default: (props: {
            outline: string;
            color: string;
        }) => true | {
            color: string;
        };
    };
    picker: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:toggle": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: StringConstructor;
    size: StringConstructor;
    outline: StringConstructor;
    rounded: BooleanConstructor;
    floating: BooleanConstructor;
    toggler: BooleanConstructor;
    toggle: BooleanConstructor;
    role: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    ripple: {
        type: PropType<boolean | {
            [props: string]: string | number | boolean;
        }>;
        default: (props: {
            outline: string;
            color: string;
        }) => true | {
            color: string;
        };
    };
    picker: BooleanConstructor;
}>> & {
    "onUpdate:toggle"?: (...args: any[]) => any;
}, {
    tag: string;
    type: string;
    toggle: boolean;
    rounded: boolean;
    floating: boolean;
    toggler: boolean;
    role: string;
    block: boolean;
    ripple: boolean | {
        [props: string]: string | number | boolean;
    };
    picker: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
