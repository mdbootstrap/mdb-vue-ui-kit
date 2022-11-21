declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            wrap: boolean;
            maxLength: number;
            white: boolean;
            formOutline: boolean;
            inputGroup: string | boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            counter: boolean;
            rows: string | number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            rows: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            label: StringConstructor;
            modelValue: (StringConstructor | NumberConstructor)[];
            size: StringConstructor;
            formOutline: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrapperClass: StringConstructor;
            inputGroup: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formText: StringConstructor;
            white: BooleanConstructor;
            validationEvent: StringConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            helper: StringConstructor;
            counter: BooleanConstructor;
            maxLength: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "wrap" | "maxLength" | "white" | "formOutline" | "inputGroup" | "isValidated" | "isValid" | "tooltipFeedback" | "counter" | "rows">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>;
        $emit: (event: "update:modelValue" | "on-validate", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            rows: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            label: StringConstructor;
            modelValue: (StringConstructor | NumberConstructor)[];
            size: StringConstructor;
            formOutline: {
                type: BooleanConstructor;
                default: boolean;
            };
            wrapperClass: StringConstructor;
            inputGroup: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            wrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            formText: StringConstructor;
            white: BooleanConstructor;
            validationEvent: StringConstructor;
            isValidated: BooleanConstructor;
            isValid: BooleanConstructor;
            validFeedback: StringConstructor;
            invalidFeedback: StringConstructor;
            tooltipFeedback: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            helper: StringConstructor;
            counter: BooleanConstructor;
            maxLength: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], string, {
            tag: string;
            wrap: boolean;
            maxLength: number;
            white: boolean;
            formOutline: boolean;
            inputGroup: string | boolean;
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            counter: boolean;
            rows: string | number;
        }, {}, string> & {
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
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        id: StringConstructor;
        rows: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        label: StringConstructor;
        modelValue: (StringConstructor | NumberConstructor)[];
        size: StringConstructor;
        formOutline: {
            type: BooleanConstructor;
            default: boolean;
        };
        wrapperClass: StringConstructor;
        inputGroup: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        wrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        formText: StringConstructor;
        white: BooleanConstructor;
        validationEvent: StringConstructor;
        isValidated: BooleanConstructor;
        isValid: BooleanConstructor;
        validFeedback: StringConstructor;
        invalidFeedback: StringConstructor;
        tooltipFeedback: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        helper: StringConstructor;
        counter: BooleanConstructor;
        maxLength: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onOn-validate"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    rows: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    label: StringConstructor;
    modelValue: (StringConstructor | NumberConstructor)[];
    size: StringConstructor;
    formOutline: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapperClass: StringConstructor;
    inputGroup: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    wrap: {
        type: BooleanConstructor;
        default: boolean;
    };
    formText: StringConstructor;
    white: BooleanConstructor;
    validationEvent: StringConstructor;
    isValidated: BooleanConstructor;
    isValid: BooleanConstructor;
    validFeedback: StringConstructor;
    invalidFeedback: StringConstructor;
    tooltipFeedback: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    helper: StringConstructor;
    counter: BooleanConstructor;
    maxLength: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], "update:modelValue" | "on-validate", {
    tag: string;
    wrap: boolean;
    maxLength: number;
    white: boolean;
    formOutline: boolean;
    inputGroup: string | boolean;
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    counter: boolean;
    rows: string | number;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
        prepend: (_: {}) => any;
    };
});
export default _default;
