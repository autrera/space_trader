// app.js
import { createSignal, onMount, Switch, Match } from "./solid/solid.js";
import { openDB, getAll, add, remove, getByIndex, update } from "./db.js";
import html from "./solid/html.js";
import Drawer from "./drawer.js";
import { isLocalStorageAvailable } from "./utilities.js";

export default function App() {
  onMount(async () => {
    const database = await openDB();
    setDb(database);

    if (isLocalStorageAvailable()) {
    }
  });

  return html``;
}
