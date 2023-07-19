export function showDialog(title, text, additionalButtons) {
  const dialog = document.createElement("dialog");
  const dialogTitle = document.createElement("h3");
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

  if (additionalButtons !== undefined) {
    dialog.append(...additionalButtons);
  }

  dialog.append(closeButton);
  dialog.classList.add("card");

  document.body.append(dialog);
  document.body.classList.add("body-blur");

  setTimeout(() => {
    dialog.showModal();
  }, 10);
}
