import _ from "lodash";
import scrapeIt from "scrape-it";

const BASE_URL = "https://slay-the-spire.fandom.com/wiki";
const IRONCLAD_CARDS_URL = `${ BASE_URL }/Ironclad_Cards`;

const PLURAL_REGEX = /(\w+)\((s)\)/g;
const WORDS_REGEX = /(\w+)\(([^)]+)\)/g;
const VALUE_REGEX = /(\d*)\((\d+)\)/g;
const WHITESPACE_REGEX = /\s+/mg;

function downgrade(string) {
  return string
    .replace(PLURAL_REGEX, "$1")
    .replace(VALUE_REGEX, "$1")
    .replace(WORDS_REGEX, "$1")
    .replace(WHITESPACE_REGEX, " ");
}

function upgrade(string) {
  return string
    .replace(PLURAL_REGEX, "$1$2")
    .replace(VALUE_REGEX, "$2")
    .replace(WORDS_REGEX, "$2")
    .replace(WHITESPACE_REGEX, " ");
}

function transformCard({ name, rarity, type, cost, description }) {

  let common = {
    rarity,
    type
  };

  return [
    {
      name,
      description: downgrade(description),
      ...common,
      cost: downgrade(cost)
    },
    {
      name: `${ name }+`,
      description: upgrade(description),
      ...common,
      cost: upgrade(cost)
    }
  ];
}

export async function fetchCards() {

  let response = await scrapeIt(IRONCLAD_CARDS_URL, {
    cards: {
      listItem: ".article-table tr",
      data: {
        name: "td:nth-of-type(1)",
        rarity: "td:nth-of-type(3)",
        type: "td:nth-of-type(4)",
        cost: "td:nth-of-type(5)",
        description: "td:nth-of-type(6)"
      }
    }
  });

  return _.flatten(response.data.cards.slice(1).map(transformCard));
}
