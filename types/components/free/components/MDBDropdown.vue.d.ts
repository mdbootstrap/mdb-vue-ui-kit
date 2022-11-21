import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            modelValue: boolean;
            align: string | string[];
            offset: string | number[] | (() => string | number[]);
            boundary: string;
            btnGroup: boolean;
            dropup: boolean;
            dropend: boolean;
            dropstart: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
            popperConfig: (ObjectConstructor | FunctionConstructor)[];
            target: StringConstructor;
            modelValue: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "modelValue" | "align" | "offset" | "boundary" | "btnGroup" | "dropup" | "dropend" | "dropstart">;
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
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            popperConfig: (ObjectConstructor | FunctionConstructor)[];
            target: StringConstructor;
            modelValue: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            tag: string;
            modelValue: boolean;
            align: string | string[];
            offset: string | number[] | (() => string | number[]);
            boundary: string;
            btnGroup: boolean;
            dropup: boolean;
            dropend: boolean;
            dropstart: boolean;
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
        popperConfig: (ObjectConstructor | FunctionConstructor)[];
        target: StringConstructor;
        modelValue: BooleanConstructor;
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    popperConfig: (ObjectConstructor | FunctionConstructor)[];
    target: StringConstructor;
    modelValue: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    tag: string;
    modelValue: boolean;
    align: string | string[];
    offset: string | number[] | (() => string | number[]);
    boundary: string;
    btnGroup: boolean;
    dropup: boolean;
    dropend: boolean;
    dropstart: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
