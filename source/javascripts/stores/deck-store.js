import { observable, action } from "mobx";
import CARDS from "../../../data/ironclad-cards.json";
import _ from "lodash";

export class DeckStore {

  @observable
  cards = []

  constructor() {
    this.reset();
  }

  reset() {
    _.times(5, () => this.cards.push(_.find(CARDS, { name: "Strike" })));
    _.times(5, () => this.cards.push(_.find(CARDS, { name: "Defend" })));
    this.cards.push(_.find(CARDS, { name: "Bash" }));
  }
}
