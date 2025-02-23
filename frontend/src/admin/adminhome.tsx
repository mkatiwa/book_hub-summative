import React, { useState } from "react";
import imageToBase64 from "../helpers/imageToBase64"


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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
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

  const addBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ title: '', author: '', description:'', genre: '', cover_image: '', publisher:'', language:'',publication_date: '', rating:'', page_count:''});
  };


  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.genre}
          onChange={handleInputChange}
        />
        <input
          type="file"
          placeholder="Book Title"
          value={newBook.cover_image}
          onChange={handleUploadPic}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.publisher}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.language}
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="Book Title"
          value={newBook.publication_date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.page_count}
          onChange={handleInputChange}
        />
       

  <button onClick={addBook}>Add Book</button>
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