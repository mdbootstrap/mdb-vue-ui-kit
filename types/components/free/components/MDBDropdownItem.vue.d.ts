import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    to: PropType<string | {
        [props: string]: string;
    }>;
    href: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    newTab: {
        type: BooleanConstructor;
        default: boolean;
    };
    submenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    submenuIcon: StringConstructor;
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    to: PropType<string | {
        [props: string]: string;
    }>;
    href: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    exact: {
        type: BooleanConstructor;
        default: boolean;
    };
    newTab: {
        type: BooleanConstructor;
        default: boolean;
    };
    submenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    submenuIcon: StringConstructor;
    divider: {
        type: BooleanConstructor;
        default: boolean;
    };
    text: {
        type: BooleanConstructor;
        default: boolean;
    };
    header: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    header: boolean;
    text: boolean;
    tag: string;
    disabled: boolean;
    active: boolean;
    exact: boolean;
    newTab: boolean;
    submenu: boolean;
    divider: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
