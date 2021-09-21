import { getRssFeed, RssFeed } from "./services/medium-feed";
import { MediumArticlesComponent } from "./components/medium-articles";
import "./components/medium-articles";
import "./components/medium-header";

const css = `
<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");
:root {
  --color-action: #e31b6d;
  --color-bg: #D2DBDD;
  --color-chip-bg: #f2f2f2;
  --color-chip-bg-hover: #e6e6e6;
}


#medium-portfolio-app {
  font-family: 'Roboto Slab', serif;
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
class MediumPortfolio extends HTMLElement {
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
  }

  async connectedCallback() {
    await this.loadRssFeed();
    this.render();
    this.setArticles();
  }

  async loadRssFeed() {
    this.rssFeed = await getRssFeed(this.mediumUsername, this.maxArticles);
  }

  setArticles() {
    const mediumArticles = document.querySelector(
      "medium-articles"
    ) as MediumArticlesComponent;
    mediumArticles.articles = this.rssFeed.articles;
  }

  render() {
    this.innerHTML += `
    ${css}
    <div id="medium-portfolio-app">
  
    ${
      this.hideHeader
        ? ""
        : `<medium-header title="${
            this.rssFeed.feed.title
          }" image=${encodeURIComponent(
            this.rssFeed.feed.image
          )}></medium-header>`
    }

    <medium-articles></medium-articles>
    
    </div>
    `;
  }
}

customElements.define("medium-portfolio", MediumPortfolio);
