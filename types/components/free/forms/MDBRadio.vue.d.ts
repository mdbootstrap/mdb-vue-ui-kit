declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            required: boolean;
            tag: string;
            wrap: boolean;
            inline: boolean;
            btnCheck: boolean;
            validateOnChange: boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            formCheck: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            label: StringConstructor;
            inline: BooleanConstructor;
            modelValue: StringConstructor;
            wrapperClass: StringConstructor;
            labelClass: StringConstructor;
            btnCheck: BooleanConstructor;
            required: BooleanConstructor;
            validateOnChange: BooleanConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formCheck: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "required" | "tag" | "wrap" | "inline" | "btnCheck" | "validateOnChange" | "isValidated" | "isValid" | "tooltipFeedback" | "formCheck">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue" | "on-validate", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            label: StringConstructor;
            inline: BooleanConstructor;
            modelValue: StringConstructor;
            wrapperClass: StringConstructor;
            labelClass: StringConstructor;
            btnCheck: BooleanConstructor;
            required: BooleanConstructor;
            validateOnChange: BooleanConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formCheck: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], string, {
            required: boolean;
            tag: string;
            wrap: boolean;
            inline: boolean;
            btnCheck: boolean;
            validateOnChange: boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            formCheck: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        label: StringConstructor;
        inline: BooleanConstructor;
        modelValue: StringConstructor;
        wrapperClass: StringConstructor;
        labelClass: StringConstructor;
        btnCheck: BooleanConstructor;
        required: BooleanConstructor;
        validateOnChange: BooleanConstructor;
        isValidated: BooleanConstructor;
        isValid: BooleanConstructor;
        validFeedback: StringConstructor;
        invalidFeedback: StringConstructor;
        tooltipFeedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        formCheck: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onOn-validate"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    label: StringConstructor;
    inline: BooleanConstructor;
    modelValue: StringConstructor;
    wrapperClass: StringConstructor;
    labelClass: StringConstructor;
    btnCheck: BooleanConstructor;
    required: BooleanConstructor;
    validateOnChange: BooleanConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formCheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], "update:modelValue" | "on-validate", {
    required: boolean;
    tag: string;
    wrap: boolean;
    inline: boolean;
    btnCheck: boolean;
    validateOnChange: boolean;
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    formCheck: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
