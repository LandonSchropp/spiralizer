import { toCSV } from "./csv";
import { fetchCards } from "./cards";

(async () => {
  process.stdout.write(toCSV(await fetchCards()));
})();
