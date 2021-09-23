// @ts-check
import { encodeObject, decodeObject } from "../services/helper";
import { Article } from "../services/medium-feed";
import "./medium-category-chips";
import { customElement, property } from "lit/decorators.js";
import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { styleMap } from "lit-html/directives/style-map.js";

const componentStyle = css`
  :host {
    max-width: 100%;
  }

  .card {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    width: 320px;
    border-radius: 12px;
    transform: scale(0.95, 0.95);
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1, 1);
    z-index: 2;
  }

  .card-time {
    font-size: 12px;
    color: #ad7d52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card-clock-info {
    float: right;
  }

  .card-img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card-img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  }

  .card-info {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 16px 24px;
    height: 155px;
  }

  .card-category {
    font-family: "Raleway", sans-serif;
    font-size: 10px;
    letter-spacing: 1.2px;
    font-weight: 500;
    color: #868686;
  }

  .card-title a {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: "Roboto Slab", serif;
    text-decoration: none;
    color: black;
  }

  .card-footer {
    margin-top: auto;
    font-size: 13px;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    width: 100%;
  }

  .card-author {
    font-weight: 600;
    text-decoration: none;
    color: var(--color-action);
  }

  .card-date {
    float: right;
  }

  .card:hover .card-img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card-info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card-info-hover {
    opacity: 1;
  }

  medium-category-chips {
    margin-top: auto;
  }

  @media only screen and (max-width: 580px) {
    .card {
      width: 100%;
      transform: scale(1, 1);
      border-radius: 0;
      margin-top: 10px;
    }
    .card-img,
    .card-info,
    .card-img--hover {
      border-radius: 0 !important;
    }
  }
`;

@customElement("medium-article-card")
class MediumArticleCardComponent extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  article!: Article;

  render() {
    return html`
      <article class="card card--1">
        <div class="card-img"></div>
        <a href="${this.article.link}" target="_blank" class="card_link">
          <div
            class="card-img--hover"
            style=${styleMap({
              backgroundImage: `url('${this.article.thumbnail}')`,
            })}
          ></div>
        </a>
        <div class="card-info">
          <div class="card-title">
            <a target="_blank" href="${this.article.link}"
              >${this.article.title}</a
            >
          </div>

          <medium-category-chips
            .categories="${this.article.categories}"
          ></medium-category-chips>

          <div class="card-footer">
            <span>by</span>
            <a
              target="_blank"
              href="${this.article.userLink}"
              class="card-author"
              title="author"
              >${this.article.author}</a
            >
            <span class="card-date"
              >${new Date(this.article.pubDate).toLocaleDateString()}</span
            >
          </div>
        </div>
      </article>
    `;
  }
}
