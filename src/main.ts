import { getRssFeed, RssFeed } from "./services/medium-feed";
import "./components/medium-articles";
import "./components/medium-header";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

const globalStyles = `
<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
  @import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
  :root {
    --color-action: #e31b6d;
    --color-bg: #d2dbdd;
    --color-chip-bg: #f2f2f2;
    --color-chip-bg-hover: #e6e6e6;
  }

  #medium-portfolio-app {
    font-family: "Roboto Slab", serif;
    background-color: var(--color-bg);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
  }
  </style>
`;

const DEFAULT_MAX_ARTICLES = 10;
@customElement("medium-portfolio")
class MediumPortfolio extends LitElement {
  @property()
  rssFeed!: RssFeed;

  get hideHeader() {
    return this.getAttribute("hideHeader") !== null;
  }

  get mediumUsername() {
    return this.getAttribute("username") ?? "";
  }

  get maxArticles() {
    const maxArticles =
      this.getAttribute("maxArticles") ?? DEFAULT_MAX_ARTICLES;
    return !isNaN(+maxArticles) ? +maxArticles : DEFAULT_MAX_ARTICLES;
  }

  constructor() {
    super();
    this.innerHTML += globalStyles;
  }

  async firstUpdated() {
    await this.loadRssFeed();
  }

  async loadRssFeed() {
    this.rssFeed = await getRssFeed(this.mediumUsername, this.maxArticles);
  }

  createRenderRoot() {
    /**
     * Render template without shadow DOM. Note that shadow DOM features like
     * encapsulated CSS and slots are unavailable.
     */
    return this;
  }

  render() {
    return this.rssFeed
      ? html`
          <div id="medium-portfolio-app">
            ${this.hideHeader
              ? ""
              : html`<medium-header
                  title="${this.rssFeed.feed.title}"
                  image="${this.rssFeed.feed.image}"
                ></medium-header>`}

            <medium-articles
              .articles="${this.rssFeed.articles}"
            ></medium-articles>
          </div>
        `
      : html``;
  }
}
