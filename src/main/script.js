import { showDialog } from "../common.js";

document.querySelector("#dialogButton").addEventListener("click", () => {
  showDialog(
    "Hello There!",
    "General Kenobi! You managing to get here means I did an oopsie woopsie, a little fucko boingo!"
  );
});
