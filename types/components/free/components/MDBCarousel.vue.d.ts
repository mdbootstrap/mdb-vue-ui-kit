import { PropType } from "vue";
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            modelValue: number;
            pause: string | boolean;
            dark: boolean;
            captionsClass: string;
            controls: boolean;
            fade: boolean;
            indicators: boolean;
            interval: number | boolean;
            itemsClass: string;
            keyboard: boolean;
            touch: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            captionsClass: {
                type: StringConstructor;
                default: string;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            dark: BooleanConstructor;
            fade: BooleanConstructor;
            indicators: {
                type: BooleanConstructor;
                default: boolean;
            };
            interval: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: number;
            };
            items: PropType<{
                src?: string;
                alt?: string;
                label?: string;
                caption?: string;
                video?: string;
                videoType?: string;
                interval?: number;
            }[]>;
            itemsClass: {
                type: StringConstructor;
                default: string;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: NumberConstructor;
                default: number;
            };
            pause: {
                type: (BooleanConstructor | StringConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            touch: {
                type: BooleanConstructor;
                default: boolean;
            };
            innerClass: StringConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "tag" | "modelValue" | "pause" | "dark" | "captionsClass" | "controls" | "fade" | "indicators" | "interval" | "itemsClass" | "keyboard" | "touch">;
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
            captionsClass: {
                type: StringConstructor;
                default: string;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            dark: BooleanConstructor;
            fade: BooleanConstructor;
            indicators: {
                type: BooleanConstructor;
                default: boolean;
            };
            interval: {
                type: (BooleanConstructor | NumberConstructor)[];
                default: number;
            };
            items: PropType<{
                src?: string;
                alt?: string;
                label?: string;
                caption?: string;
                video?: string;
                videoType?: string;
                interval?: number;
            }[]>;
            itemsClass: {
                type: StringConstructor;
                default: string;
            };
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: NumberConstructor;
                default: number;
            };
            pause: {
                type: (BooleanConstructor | StringConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            touch: {
                type: BooleanConstructor;
                default: boolean;
            };
            innerClass: StringConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            next: () => void;
            prev: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            tag: string;
            modelValue: number;
            pause: string | boolean;
            dark: boolean;
            captionsClass: string;
            controls: boolean;
            fade: boolean;
            indicators: boolean;
            interval: number | boolean;
            itemsClass: string;
            keyboard: boolean;
            touch: boolean;
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
        captionsClass: {
            type: StringConstructor;
            default: string;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        dark: BooleanConstructor;
        fade: BooleanConstructor;
        indicators: {
            type: BooleanConstructor;
            default: boolean;
        };
        interval: {
            type: (BooleanConstructor | NumberConstructor)[];
            default: number;
        };
        items: PropType<{
            src?: string;
            alt?: string;
            label?: string;
            caption?: string;
            video?: string;
            videoType?: string;
            interval?: number;
        }[]>;
        itemsClass: {
            type: StringConstructor;
            default: string;
        };
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: NumberConstructor;
            default: number;
        };
        pause: {
            type: (BooleanConstructor | StringConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        touch: {
            type: BooleanConstructor;
            default: boolean;
        };
        innerClass: StringConstructor;
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        next: () => void;
        prev: () => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    captionsClass: {
        type: StringConstructor;
        default: string;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    dark: BooleanConstructor;
    fade: BooleanConstructor;
    indicators: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: number;
    };
    items: PropType<{
        src?: string;
        alt?: string;
        label?: string;
        caption?: string;
        video?: string;
        videoType?: string;
        interval?: number;
    }[]>;
    itemsClass: {
        type: StringConstructor;
        default: string;
    };
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    pause: {
        type: (BooleanConstructor | StringConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    touch: {
        type: BooleanConstructor;
        default: boolean;
    };
    innerClass: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    next: () => void;
    prev: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    tag: string;
    modelValue: number;
    pause: string | boolean;
    dark: boolean;
    captionsClass: string;
    controls: boolean;
    fade: boolean;
    indicators: boolean;
    interval: number | boolean;
    itemsClass: string;
    keyboard: boolean;
    touch: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
