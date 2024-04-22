import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
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
}, {
    next: () => void;
    prev: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
