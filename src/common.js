/*
 * Authored by Abrar Ahmed.
 * Role: Student 2.
 */
export function showDialog(title, text, additionalWidgets) {
  // create required elements
  const dialog = document.createElement("dialog");
  const dialogTitle = document.createElement("h1");
  const dialogText = document.createElement("p");
  const closeButton = document.createElement("button");

  dialogTitle.textContent = title;
  dialogTitle.classList.add("dialog-header");

  dialogText.textContent = text;
  dialogText.classList.add("dialog-text");

  closeButton.textContent = "Close";
  closeButton.autofocus = true;
  closeButton.classList.add("destructive");

  // start closing dialog on click
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // once dialog closed remove element
  // remove blur from body
  dialog.addEventListener("close", () => {
    document.body.classList.remove("body-blur");
    dialog.remove();
  });

  // add standard elements
  dialog.append(dialogTitle, dialogText);

  // check for and add additional widgets
  // user of function responsible for any errors that may occur here
  if (additionalWidgets !== undefined) {
    dialog.append(...additionalWidgets);
  }

  // add close button
  dialog.append(closeButton);
  dialog.classList.add("card");

  // add element and blur body
  document.body.append(dialog);
  document.body.classList.add("body-blur");

  // show dialog with a small delay to allow
  // elements to be added and start animating
  setTimeout(() => {
    dialog.showModal();
  }, 10);
}
