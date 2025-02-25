import axios from "axios";


const API_BASE_URL = "http://127.0.0.1:8000/api/books/"
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const fetchBooks = async () => {
  try {
    const response = await api.get("/books/");
return response.data;

} catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

const createBook = async (title: string, author: string, description: string, genre: string, cover_image: string, publisher: string, language: string, publication_date: string, rating : string, page_count: string) => {
    try {
      const response = await axios.post(API_BASE_URL, { title, author, description, genre, cover_image, publisher, language, publication_date, rating, page_count});
  return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };

export default createBook;
