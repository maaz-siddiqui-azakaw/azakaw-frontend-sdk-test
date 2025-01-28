declare global {
  interface HTMLElementTagNameMap {
    'az-customer-onboarding': CustomerOnboardingWebComponent;
  }

  interface HTMLElementEventMap {
    onboardingCompleted: CustomEvent<void>;
  }
}

export declare class CustomerOnboardingWebComponent extends HTMLElement {
  'session-id': string;
  'host-origin': string;
  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string,
    namespace?: string
  ): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
}

export {};
