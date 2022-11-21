import { PropType } from "vue";
export declare const MDBFileList: ObjectConstructor | {
    new (): FileList;
    prototype: FileList;
};
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            modelValue: FileList | File[];
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            validateOnChange: boolean;
            isInvalid: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            id: StringConstructor;
            inputClass: StringConstructor;
            invalidFeedback: StringConstructor;
            isInvalid: BooleanConstructor;
            isValid: BooleanConstructor;
            isValidated: BooleanConstructor;
            label: StringConstructor;
            labelClass: StringConstructor;
            modelValue: {
                type: PropType<FileList | File[]>;
                default: () => any[];
            };
            size: StringConstructor;
            tooltipFeedback: BooleanConstructor;
            validFeedback: StringConstructor;
            validateOnChange: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "modelValue" | "isValidated" | "isValid" | "tooltipFeedback" | "validateOnChange" | "isInvalid">;
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
            inputClass: StringConstructor;
            invalidFeedback: StringConstructor;
            isInvalid: BooleanConstructor;
            isValid: BooleanConstructor;
            isValidated: BooleanConstructor;
            label: StringConstructor;
            labelClass: StringConstructor;
            modelValue: {
                type: PropType<FileList | File[]>;
                default: () => any[];
            };
            size: StringConstructor;
            tooltipFeedback: BooleanConstructor;
            validFeedback: StringConstructor;
            validateOnChange: BooleanConstructor;
        }>> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onOn-validate"?: (...args: any[]) => any;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], string, {
            modelValue: FileList | File[];
            isValidated: boolean;
            isValid: boolean;
            tooltipFeedback: boolean;
            validateOnChange: boolean;
            isInvalid: boolean;
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
        inputClass: StringConstructor;
        invalidFeedback: StringConstructor;
        isInvalid: BooleanConstructor;
        isValid: BooleanConstructor;
        isValidated: BooleanConstructor;
        label: StringConstructor;
        labelClass: StringConstructor;
        modelValue: {
            type: PropType<FileList | File[]>;
            default: () => any[];
        };
        size: StringConstructor;
        tooltipFeedback: BooleanConstructor;
        validFeedback: StringConstructor;
        validateOnChange: BooleanConstructor;
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onOn-validate"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    inputClass: StringConstructor;
    invalidFeedback: StringConstructor;
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isValidated: BooleanConstructor;
    label: StringConstructor;
    labelClass: StringConstructor;
    modelValue: {
        type: PropType<FileList | File[]>;
        default: () => any[];
    };
    size: StringConstructor;
    tooltipFeedback: BooleanConstructor;
    validFeedback: StringConstructor;
    validateOnChange: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onOn-validate"?: (...args: any[]) => any;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-validate")[], "update:modelValue" | "on-validate", {
    modelValue: FileList | File[];
    isValidated: boolean;
    isValid: boolean;
    tooltipFeedback: boolean;
    validateOnChange: boolean;
    isInvalid: boolean;
}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
