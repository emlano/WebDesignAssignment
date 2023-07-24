/*
 * Authored by Abrar Ahmed.
 * Role: Student 2.
 */
export function showDialog(title, text, additionalWidgets) {
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
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("body-blur");
    dialog.remove();
  });

  dialog.append(dialogTitle, dialogText);

  if (additionalWidgets !== undefined) {
    dialog.append(...additionalWidgets);
  }

  dialog.append(closeButton);
  dialog.classList.add("card");

  document.body.append(dialog);
  document.body.classList.add("body-blur");

  setTimeout(() => {
    dialog.showModal();
  }, 10);
}
