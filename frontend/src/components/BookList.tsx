import React, { useState, useEffect } from 'react';
import { Grid, Typography, Pagination, Box } from '@mui/material';
import { fetchBooks } from '../services/api';
import { Book } from '../types';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const data = await fetchBooks( page);
        setBooks(data.results);
        setTotalBooks(data.count);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadBooks();
  }, [page]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Book Hub
      </Typography>
            
      {loading ? (
        <Typography>Loading books...</Typography>
      ) : books.length === 0 ? (
        <Typography>No books found matching your criteria.</Typography>
      ) : (
        <>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {books.map(book => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination 
              count={Math.ceil(totalBooks / 10)} 
              page={page} 
              onChange={handlePageChange} 
              color="primary" 
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default BookList;