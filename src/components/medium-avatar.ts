import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";

const componentStyle = css`
  .avatar {
    width: 50px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;

@customElement("medium-avatar")
class MediumAvatar extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  image!: string;

  render() {
    return html` <img class="avatar" src="${this.image}" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "medium-avatar": MediumAvatar;
  }
}
