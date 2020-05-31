import { DeckStore } from "./deck-store";

export const storesContext = React.createContext({
  counterStore: new DeckStore()
});

export const useStores = () => React.useContext(storesContext);
