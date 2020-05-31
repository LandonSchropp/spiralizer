import { observable, action } from "mobx";
import { CARDS } from "../../data/ironclad-cards.json";
import _ from "lodash";

export class DeckStore {

  @observable
  deck = []

  constructor() {
    this.reset();
  }

  reset() {
    _.times(5, () => this.deck.push(_.find(CARDS, { name: "Strike" })));
    _.times(5, () => this.deck.push(_.find(CARDS, { name: "Defend" })));
    this.deck.push(_.find(CARDS, { name: "Bash" }));
  }

  @action
  setTheme(newTheme: string) {
    this.theme = newTheme;
  }
}
