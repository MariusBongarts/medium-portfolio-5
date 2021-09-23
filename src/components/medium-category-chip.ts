import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("medium-category-chip")
export class MediumCategoryChip extends LitElement {
  static styles = css`
    .chip {
      display: inline-block;
      color: #292929;
      transition: background 300ms ease 0s;
      box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
      padding: 1px 4px;
      margin: 0 2px;
      height: 12px;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      border-radius: 25px;
      background-color: var(--color-chip-bg);
    }

    .chip:hover {
      background-color: var(--color-chip-bg-hover);
    }
  `;

  render() {
    return html` <div class="chip card-category"><slot></slot></div> `;
  }
}
