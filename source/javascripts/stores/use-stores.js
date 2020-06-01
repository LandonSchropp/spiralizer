import { createContext, useContext } from "react";
import { DeckStore } from "./deck-store";

export const storesContext = createContext({
  deckStore: new DeckStore()
});

export const useStores = () => useContext(storesContext);
