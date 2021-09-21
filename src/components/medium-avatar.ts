const css = `
<style>
    .avatar {
        width: 50px;
        border-radius: 50%;
        box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
    }
</style>
`;
class MediumAvatar extends HTMLElement {
  get image() {
    return decodeURIComponent(this.getAttribute("image") ?? "{}");
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
    ${css}
    <img class="avatar" src="${this.image}"></img>
    `;
  }
}

customElements.define("medium-avatar", MediumAvatar);
export {};
