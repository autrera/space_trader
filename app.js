// app.js
import { createSignal, onMount, Switch, Match } from "./solid/solid.js";
import { openDB, getAll, add, remove, getByIndex, update } from "./db.js";
import html from "./solid/html.js";
import Drawer from "./drawer.js";
import { isLocalStorageAvailable } from "./utilities.js";

export default function App() {
  const universe = [];
  const [loaded, setLoaded] = createSignal(false);
  const [currentSector, setCurrentSector] = createSignal(null);

  onMount(async () => {
    // const database = await openDB();
    // setDb(database);

    for (let i = 0; i < 100; i++) {
      universe[i] = [];
      for (let j = 0; j < 100; j++) {
        let colony = null;
        if (Math.floor(Math.random() * 1) == 0) {
          colony = {
            planet: true,
            habitants: Math.floor(Math.random() * 10_000),
            energy: Math.floor(Math.random() * 10_000),
          };
        }

        universe[i].push({
          name: `Sector: ${i}-${j}`,
          colony: colony,
          x: i,
          y: j,
        });
      }
    }

    setCurrentSector(
      universe[Math.floor(Math.random() * 100)][
        Math.floor(Math.random() * 100)
      ],
    );

    if (isLocalStorageAvailable()) {
    }

    setLoaded(true);
  });

  return () => {
    if (loaded()) {
      return html`
        <p>Your are in sector: ${currentSector().name}</p>

        ${() => {
          if (currentSector().colony != null) {
            return html`
              <p>Energy: ${currentSector().colony.energy}</p>
              <p>Habitants: ${currentSector().colony.habitants}</p>
            `;
          }
        }}
      `;
    }
  };
}
