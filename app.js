// app.js
import { createSignal, onMount, Switch, Match } from "./solid/solid.js";
import { openDB, getAll, add, remove, getByIndex, update } from "./db.js";
import html from "./solid/html.js";
import Drawer from "./drawer.js";
import { isLocalStorageAvailable } from "./utilities.js";

export default function App() {
  const [loaded, setLoaded] = createSignal(false);
  const universe = [];
  const startingPoint = {
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  };

  onMount(async () => {
    // const database = await openDB();
    // setDb(database);

    for (let i = 0; i < 100; i++) {
      universe[i] = [];
      for (let j = 0; j < 100; j++) {
        universe[i].push({
          name: `Sector: ${i}-${j}`,
          x: i,
          y: j,
        });
      }
    }

    if (isLocalStorageAvailable()) {
    }

    setLoaded(true);
  });

  return () => {
    if (loaded()) {
      return html`
        <p>Your are in sector ${startingPoint["x"]}-${startingPoint["y"]}</p>
        <p>${universe[startingPoint["x"]][startingPoint["y"]].name}</p>
      `;
    }
  };
}
