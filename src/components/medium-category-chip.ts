const css = `
<style>
.chip {
    display: inline-block;
    color: #292929;
    transition: background 300ms ease 0s;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
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

</style>
`;

const template = document.createElement("template");
template.innerHTML += `
    ${css}
    <div class="chip card-category"><slot></slot></div>
`;

class MediumCategoryChip extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("medium-category-chip", MediumCategoryChip);
