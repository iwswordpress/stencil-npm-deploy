/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IwsSpinner {
    }
    interface IwsStockFinder {
    }
    interface IwsStockPrice {
        "stockSymbol": string;
    }
    interface IwsWordpress {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "firstName": string;
        /**
          * The last name
         */
        "lastName": string;
        /**
          * The middle name
         */
        "middleName": string;
    }
}
declare global {
    interface HTMLIwsSpinnerElement extends Components.IwsSpinner, HTMLStencilElement {
    }
    var HTMLIwsSpinnerElement: {
        prototype: HTMLIwsSpinnerElement;
        new (): HTMLIwsSpinnerElement;
    };
    interface HTMLIwsStockFinderElement extends Components.IwsStockFinder, HTMLStencilElement {
    }
    var HTMLIwsStockFinderElement: {
        prototype: HTMLIwsStockFinderElement;
        new (): HTMLIwsStockFinderElement;
    };
    interface HTMLIwsStockPriceElement extends Components.IwsStockPrice, HTMLStencilElement {
    }
    var HTMLIwsStockPriceElement: {
        prototype: HTMLIwsStockPriceElement;
        new (): HTMLIwsStockPriceElement;
    };
    interface HTMLIwsWordpressElement extends Components.IwsWordpress, HTMLStencilElement {
    }
    var HTMLIwsWordpressElement: {
        prototype: HTMLIwsWordpressElement;
        new (): HTMLIwsWordpressElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "iws-spinner": HTMLIwsSpinnerElement;
        "iws-stock-finder": HTMLIwsStockFinderElement;
        "iws-stock-price": HTMLIwsStockPriceElement;
        "iws-wordpress": HTMLIwsWordpressElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IwsSpinner {
    }
    interface IwsStockFinder {
        "onUcSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface IwsStockPrice {
        "stockSymbol"?: string;
    }
    interface IwsWordpress {
        "onIwsPostSelected"?: (event: CustomEvent<string>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "firstName"?: string;
        /**
          * The last name
         */
        "lastName"?: string;
        /**
          * The middle name
         */
        "middleName"?: string;
    }
    interface IntrinsicElements {
        "iws-spinner": IwsSpinner;
        "iws-stock-finder": IwsStockFinder;
        "iws-stock-price": IwsStockPrice;
        "iws-wordpress": IwsWordpress;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "iws-spinner": LocalJSX.IwsSpinner & JSXBase.HTMLAttributes<HTMLIwsSpinnerElement>;
            "iws-stock-finder": LocalJSX.IwsStockFinder & JSXBase.HTMLAttributes<HTMLIwsStockFinderElement>;
            "iws-stock-price": LocalJSX.IwsStockPrice & JSXBase.HTMLAttributes<HTMLIwsStockPriceElement>;
            "iws-wordpress": LocalJSX.IwsWordpress & JSXBase.HTMLAttributes<HTMLIwsWordpressElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
