import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'az-customer-onboarding': CustomerOnboardingAttributes;
    }
  }

  interface HTMLElementTagNameMap {
    'az-customer-onboarding': CustomerOnboardingComponent;
  }

  interface HTMLElementEventMap {
    onboardingCompleted: CustomEvent<void>;
  }
}

interface CustomerOnboardingAttributes
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  'session-id': string;
  'host-origin': string;
  onboardingCompleted?: (event: CustomEvent) => void;
}

export declare class CustomerOnboardingComponent extends HTMLElement {
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
