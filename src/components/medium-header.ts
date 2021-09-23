import "./medium-avatar";
import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";

const componentStyle = css`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
  h1 {
    font-weight: 300;
  }

  medium-avatar {
    margin-left: 15px;
  }
`;

@customElement("medium-header")
class MediumHeader extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  title!: string;

  @property()
  image!: string;

  render() {
    return html`
      <div class="header">
        <h1>${this.title}</h1>
        <medium-avatar image=${this.image}></medium-avatar>
      </div>
    `;
  }
}
