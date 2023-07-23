import { showDialog } from "../../common.js";

document.querySelectorAll(".movie-info > img").forEach(img => {
  img.addEventListener("click", event => {
    const imgElement = document.createElement("img");
    const title = event.target.nextElementSibling.textContent;
    imgElement.src = event.target.src;
    imgElement.alt = event.target.alt;

    showDialog(title, "", [imgElement]);
  });
});
