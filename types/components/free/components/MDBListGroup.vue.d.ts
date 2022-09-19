declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            flush: boolean;
            horizontal: string | boolean;
            numbered: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            flush: {
                type: BooleanConstructor;
                default: boolean;
            };
            horizontal: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            numbered: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "flush" | "horizontal" | "numbered">;
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
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            flush: {
                type: BooleanConstructor;
                default: boolean;
            };
            horizontal: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            numbered: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            tag: string;
            flush: boolean;
            horizontal: string | boolean;
            numbered: boolean;
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
        flush: {
            type: BooleanConstructor;
            default: boolean;
        };
        horizontal: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        numbered: BooleanConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: BooleanConstructor;
        default: boolean;
    };
    horizontal: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    numbered: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    tag: string;
    flush: boolean;
    horizontal: string | boolean;
    numbered: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
