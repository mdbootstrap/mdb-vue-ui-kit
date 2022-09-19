declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            close: boolean;
            closeWhite: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            close: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeWhite: {
                type: BooleanConstructor;
                default: boolean;
            };
            color: StringConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "close" | "closeWhite">;
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
            tag: {
                type: StringConstructor;
                default: string;
            };
            close: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeWhite: {
                type: BooleanConstructor;
                default: boolean;
            };
            color: StringConstructor;
        }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
            tag: string;
            close: boolean;
            closeWhite: boolean;
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
        tag: {
            type: StringConstructor;
            default: string;
        };
        close: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeWhite: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: StringConstructor;
    }>> & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    close: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeWhite: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    tag: string;
    close: boolean;
    closeWhite: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
