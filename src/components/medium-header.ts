import "./medium-avatar";

const css = `
<style>
.header {
  display: flex;
  align-items: center;
  margin: 10px;
}
h1 {
  font-weight: 300;
}

medium-avatar {
  margin-left: 15px;
}
</style>
`;

class MediumHeader extends HTMLElement {
  get headerTitle() {
    return this.getAttribute("title");
  }
  get image() {
    return this.getAttribute("image");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
    ${css}
    <div class="header">
      <h1>${this.headerTitle}</h1>
      <medium-avatar image=${this.image}></medium-avatar>
    </div>
    `;
  }
}

customElements.define("medium-header", MediumHeader);
