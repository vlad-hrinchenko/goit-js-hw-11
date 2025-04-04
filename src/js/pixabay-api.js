import axios from "axios";

const API_KEY = "49648787-23678a34732312ef5f90b1ecb";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Помилка отримання даних:", error);
    return [];
  }
}
