declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    collapseId: {
        type: StringConstructor;
        required: true;
    };
    headerTitle: StringConstructor;
    headerClasses: StringConstructor;
    bodyClasses: StringConstructor;
    itemClasses: StringConstructor;
    icon: StringConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    collapseId: {
        type: StringConstructor;
        required: true;
    };
    headerTitle: StringConstructor;
    headerClasses: StringConstructor;
    bodyClasses: StringConstructor;
    itemClasses: StringConstructor;
    icon: StringConstructor;
}>>, {
    tag: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
