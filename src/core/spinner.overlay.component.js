import spinnerOverlayStyle from "./spinner.overlay.component.css";

class SpinnerOverlayComponent extends HTMLElement {
  #window = window;
  #document = this.#window.document;

  #createStyles = css => {
    const style = this.#document.createElement("style");
    style.textContent = css;
    return style;
  };

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const styles = this.#createStyles(spinnerOverlayStyle);
    const slotElement = this.#document.createElement("slot");
    shadow.appendChild(styles);
    shadow.appendChild(slotElement);
  }

  self() {
    return this;
  }

  parent() {
    return this.parentNode;
  }
}

if (!window.customElements.get("yyui-spinner-overlay-component")) {
  window.customElements.define(
    "yyui-spinner-overlay-component",
    SpinnerOverlayComponent
  );
}

export { SpinnerOverlayComponent };
