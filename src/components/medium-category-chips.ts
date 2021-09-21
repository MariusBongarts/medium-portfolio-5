import { decodeObject } from "../services/helper";
import "./medium-category-chip";

const css = ``;
class MediumCategoryChips extends HTMLElement {
  get categories(): string[] {
    return decodeObject<string[]>(this.getAttribute("categories") ?? "{}");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  connectedCallback() {}

  render() {
    this.shadowRoot!.innerHTML = `
    ${css}
    <div class="chips">
    ${this.categories
      .map(
        (category) => `<medium-category-chip>${category}</medium-category-chip>`
      )
      .join("")}       
    </div>
    `;
  }
}

customElements.define("medium-category-chips", MediumCategoryChips);
