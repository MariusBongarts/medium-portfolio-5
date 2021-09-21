// @ts-check
import "./medium-article-card";
import { encodeObject } from "../services/helper";
import { Article } from "../services/medium-feed";
const css = `
<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
`;

export class MediumArticlesComponent extends HTMLElement {
  private _articles: Article[] = [];
  get articles() {
    return this._articles;
  }
  set articles(articles) {
    this._articles = articles;
    this.render();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadowRoot!.innerHTML = `
    ${css}
    <section class="cards">

    ${this.articles
      .map(
        (article: any) =>
          `<medium-article-card article=${encodeObject(
            article
          )}></medium-article-card>`
      )
      .join("")}
    
    </section>
    `;
  }
}

customElements.define("medium-articles", MediumArticlesComponent);
