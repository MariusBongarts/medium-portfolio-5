import "./medium-article-card";
import { Article } from "../services/medium-feed";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";

const componentStyles = css`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

@customElement("medium-articles")
export class MediumArticlesComponent extends LitElement {
  @property()
  articles: Article[] = [];

  static styles = componentStyles;

  render() {
    return html`
      <section class="cards">
        ${this.articles.map(
          (article: any) =>
            html`<medium-article-card
              .article="${article}"
            ></medium-article-card>`
        )}
      </section>
    `;
  }
}
