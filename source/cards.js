import scrapeIt from "scrape-it";

const BASE_URL = "https://slay-the-spire.fandom.com/wiki";
const IRONCLAD_CARDS_URL = `${ BASE_URL }/Ironclad_Cards`;

export async function fetchCards() {

  let response = await scrapeIt(IRONCLAD_CARDS_URL, {
    cards: {
      listItem: ".article-table tr",
      data: {
        name: "td:nth-of-type(1)",
        imageURL: {
          selector: "td:nth-of-type(2) a",
          attr: "href",
          convert: url => url.replace(/\/revision.*$/, "")
        },
        rarity: "td:nth-of-type(3)",
        type: "td:nth-of-type(4)",
        cost: "td:nth-of-type(5)",
        description: "td:nth-of-type(6)"
      }
    }
  });

  return response.data.cards.slice(1);
}
