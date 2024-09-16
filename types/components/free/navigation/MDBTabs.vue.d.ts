declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    vertical: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    show: (...args: any[]) => void;
    hide: (...args: any[]) => void;
    hidden: (...args: any[]) => void;
    shown: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: StringConstructor;
    vertical: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
}, {
    tag: string;
    vertical: string | boolean;
}, {}>, {
    default?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
