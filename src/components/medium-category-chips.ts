import "./medium-category-chip";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

const componentStyle = css``;

@customElement("medium-category-chips")
export class MediumCategoryChips extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  categories!: string[];

  render() {
    return html`
      <div class="chips">
        ${this.categories.map(
          (category) =>
            html`<medium-category-chip>${category}</medium-category-chip>`
        )}
      </div>
    `;
  }
}
