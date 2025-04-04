import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const searchInput = form.querySelector("input[name='search-text']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: "Warning",
      message: "Please enter a search query!",
    });
    return;
  }

  clearGallery();
  showLoader();

  const images = await getImagesByQuery(query);
  hideLoader();

  if (images.length === 0) {
    iziToast.error({
      title: "Error",
      message: "Sorry, there are no images matching your search query. Please try again!",
    });
    return;
  }

  createGallery(images);
});
