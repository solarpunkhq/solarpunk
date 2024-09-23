export declare class Inline extends HTMLElement {
    static get observedAttributes(): string[];
    assertHasShadowRoot(): asserts this is HTMLElement & {
        shadowRoot: ShadowRoot;
    };
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    constructor();
}
//# sourceMappingURL=inline.d.ts.map