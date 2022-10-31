import type { Ref } from "vue";
interface StackOptions {
    [props: string]: any;
}
declare function MDBStackable(): {
    setStack: (proxy: Ref<HTMLElement>, element: HTMLElement, selector: string, options: StackOptions) => void;
    nextStackElements: () => HTMLElement[];
    calculateStackingOffset: () => any;
    resetStackingOffset: () => void;
    stackableElements: () => {
        el: any;
        rect: any;
    }[];
};
export default MDBStackable;
