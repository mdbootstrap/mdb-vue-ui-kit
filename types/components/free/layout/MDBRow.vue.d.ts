import { PropType } from "vue";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    end: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    between: {
        type: BooleanConstructor;
        default: boolean;
    };
    around: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: PropType<string | (string | number)[]>;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    end: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    between: {
        type: BooleanConstructor;
        default: boolean;
    };
    around: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: PropType<string | (string | number)[]>;
}>>, {
    tag: string;
    center: boolean;
    start: boolean;
    end: boolean;
    between: boolean;
    around: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
