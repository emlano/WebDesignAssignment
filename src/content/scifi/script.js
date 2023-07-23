import { showDialog } from "../../common.js";

// Add an image dialog to all the images inside a .movie-info card
document.querySelectorAll(".movie-info > img").forEach(img => {
  img.addEventListener("click", event => {
    const imgElement = document.createElement("img");
    const title = event.target.nextElementSibling.textContent;
    imgElement.src = event.target.src;
    imgElement.alt = event.target.alt;

    showDialog(title, "", [imgElement]);
  });
});

// Scroll to the top
document
  .querySelector("#page-top-link")
  .addEventListener("click", () => document.body.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  }));
