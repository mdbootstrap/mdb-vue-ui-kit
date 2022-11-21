declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            modelValue: boolean;
            focus: boolean;
            duration: number;
            keyboard: boolean;
            animation: boolean;
            staticBackdrop: boolean;
            centered: boolean;
            scrollable: boolean;
            fullscreen: string | boolean;
            removeBackdrop: boolean;
            bgSrc: string;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            modelValue: BooleanConstructor;
            size: {
                type: StringConstructor;
                validator: (value: string) => boolean;
            };
            removeBackdrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            staticBackdrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            centered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgSrc: {
                type: StringConstructor;
                default: string;
            };
            scrollable: {
                type: BooleanConstructor;
                default: boolean;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            labelledby: StringConstructor;
            fullscreen: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            dialogClasses: {
                type: StringConstructor;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onHidden?: (...args: any[]) => any;
            onShown?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "modelValue" | "focus" | "duration" | "keyboard" | "animation" | "staticBackdrop" | "centered" | "scrollable" | "fullscreen" | "removeBackdrop" | "bgSrc">;
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
        $emit: (event: "update:modelValue" | "show" | "hide" | "hidden" | "shown", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            modelValue: BooleanConstructor;
            size: {
                type: StringConstructor;
                validator: (value: string) => boolean;
            };
            removeBackdrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            staticBackdrop: {
                type: BooleanConstructor;
                default: boolean;
            };
            centered: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgSrc: {
                type: StringConstructor;
                default: string;
            };
            scrollable: {
                type: BooleanConstructor;
                default: boolean;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            labelledby: StringConstructor;
            fullscreen: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            animation: {
                type: BooleanConstructor;
                default: boolean;
            };
            dialogClasses: {
                type: StringConstructor;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            focus: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            onShow?: (...args: any[]) => any;
            onHide?: (...args: any[]) => any;
            onHidden?: (...args: any[]) => any;
            onShown?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "hide" | "hidden" | "shown")[], string, {
            tag: string;
            modelValue: boolean;
            focus: boolean;
            duration: number;
            keyboard: boolean;
            animation: boolean;
            staticBackdrop: boolean;
            centered: boolean;
            scrollable: boolean;
            fullscreen: string | boolean;
            removeBackdrop: boolean;
            bgSrc: string;
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
        modelValue: BooleanConstructor;
        size: {
            type: StringConstructor;
            validator: (value: string) => boolean;
        };
        removeBackdrop: {
            type: BooleanConstructor;
            default: boolean;
        };
        staticBackdrop: {
            type: BooleanConstructor;
            default: boolean;
        };
        centered: {
            type: BooleanConstructor;
            default: boolean;
        };
        bgSrc: {
            type: StringConstructor;
            default: string;
        };
        scrollable: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        labelledby: StringConstructor;
        fullscreen: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        animation: {
            type: BooleanConstructor;
            default: boolean;
        };
        dialogClasses: {
            type: StringConstructor;
        };
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        focus: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        onShow?: (...args: any[]) => any;
        onHide?: (...args: any[]) => any;
        onHidden?: (...args: any[]) => any;
        onShown?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    modelValue: BooleanConstructor;
    size: {
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    removeBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    staticBackdrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    centered: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgSrc: {
        type: StringConstructor;
        default: string;
    };
    scrollable: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    labelledby: StringConstructor;
    fullscreen: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    dialogClasses: {
        type: StringConstructor;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    focus: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onShow?: (...args: any[]) => any;
    onHide?: (...args: any[]) => any;
    onHidden?: (...args: any[]) => any;
    onShown?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "show" | "hide" | "hidden" | "shown")[], "update:modelValue" | "show" | "hide" | "hidden" | "shown", {
    tag: string;
    modelValue: boolean;
    focus: boolean;
    duration: number;
    keyboard: boolean;
    animation: boolean;
    staticBackdrop: boolean;
    centered: boolean;
    scrollable: boolean;
    fullscreen: string | boolean;
    removeBackdrop: boolean;
    bgSrc: string;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
});
export default _default;
