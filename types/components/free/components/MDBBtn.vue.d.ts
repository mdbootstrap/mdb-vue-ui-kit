import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
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
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
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
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "type" | "toggle" | "rounded" | "floating" | "toggler" | "role" | "block" | "ripple" | "picker">;
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
        $emit: (event: "update:toggle", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:toggle"[], string, {
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
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:toggle"[], "update:toggle", {
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
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
