import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    newTab: {
        type: BooleanConstructor;
        default: boolean;
    };
    to: PropType<string | {
        [props: string]: string;
    }>;
    href: StringConstructor;
    linkClass: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    newTab: {
        type: BooleanConstructor;
        default: boolean;
    };
    to: PropType<string | {
        [props: string]: string;
    }>;
    href: StringConstructor;
    linkClass: StringConstructor;
}>>, {
    tag: string;
    disabled: boolean;
    active: boolean;
    exact: boolean;
    newTab: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
