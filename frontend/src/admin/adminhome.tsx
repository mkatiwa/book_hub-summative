import React, { useState, useEffect} from "react";
import imageToBase64 from "../helpers/imageToBase64"
import axios from "axios"


interface Book {

  title: string;
  author: string;
  description: string;
  genre: string;
  cover_image: string;
  publisher: string;
  language: string;
  publication_date: string;
  rating : string;
  page_count: string;
  

}
const AdminPanel: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const [newBook, setNewBook] = useState<Book>({ title: '', author: '', description:'', genre: '', cover_image: '', publisher:'', language:'',publication_date: '', rating:'', page_count:'' });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };


  const handleUploadPic = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imagePic = await imageToBase64(file);

      setNewBook((prev) => ({
        ...prev,
        profilePic: imagePic,
      }));
    }
  };


  // const addBook = () => {
  //   setBooks([...books, newBook]);
  //   setNewBook({ title: '', author: '', description:'', genre: '', cover_image: '', publisher:'', language:'',publication_date: '', rating:'', page_count:''});
  // };
  useEffect(() => {
    fetchBooks();
  }, []);
const fetchBooks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/books/");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) {
      alert("Please enter both title and author.");
      return;
    }
    try {
      await axios.post("http://127.0.0.1:8000/api/books/", {
        title: newBook.title,
        author: newBook.author,
        description: newBook.description,
        genre: newBook.genre,
        cover_image: newBook.cover_image,
        publisher: newBook.publisher,
        language: newBook.language,
        publication_date: newBook.publication_date,
        rating: newBook.rating,
        page_count: newBook.page_count,
      });
setNewBook({ title: '', author:'', description:'', genre:'', cover_image: '', publisher:'', language: '', publication_date:'', rating: '', page_count:''});
fetchBooks();

} catch (error) {
  console.error("Error adding book:", error);
  alert("Error adding book.");
}
};

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <form onSubmit= {handleSubmit}>
        <input
          type="text"
          name = "title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name = "description"
          placeholder="Book Description"
          value={newBook.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name = "genre"
          placeholder="Book Genre"
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="cover_image"
          placeholder="Book cover image"
          value={newBook.cover_image}
          onChange={handleUploadPic}
        />
        <input
          type="text"
          name = "publisher"
          placeholder="Book publisher"
          value={newBook.publisher}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name = "language"
          placeholder="Book language"
          value={newBook.language}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name = "publication_date"
          placeholder="Book publication date "
          value={newBook.publication_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name = "rating"
          placeholder="Book rating"
          value={newBook.rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name = "page_count"
          placeholder="Book page count"
          value={newBook.page_count}
          onChange={handleInputChange}
        />


  <button type = "submit" >Add Book</button>

        </form>
      </div>
      <h3>Books List</h3>
      <ul>
        {books.map((book) => (
          <li >
            {book.title} by {book.author}
            <button >Update</button>
            <button >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminPanel;