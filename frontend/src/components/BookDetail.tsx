import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
    Container, Grid, Paper, Typography, Rating, Chip, Box,
    Skeleton, Divider 
} from '@mui/material';
import { Book } from '../types';
import { fetchBook } from '../services/api';

const BookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBook = async () => {
            if (id) {
                try {
                    const data = await fetchBook(parseInt(id));
                    setBook(data);
                } catch (error) {
                    console.error('Error fetching book:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        loadBook();
    }, [id]);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Skeleton variant="rectangular" height={500} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Skeleton variant="text" height={60} />
                        <Skeleton variant="text" height={30} />
                        <Skeleton variant="text" height={30} />
                        <Skeleton variant="rectangular" height={200} />
                    </Grid>
                </Grid>
            </Container>
        );
    }

    if (!book) {
        return (
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography variant="h5">Book not found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <img
                            src={book.cover_image || 'https://via.placeholder.com/500x750?text=No+Cover'}
                            alt={book.title}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {book.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            by {book.author}
                        </Typography>

                        <Box sx={{ my: 2 }}>
                            <Rating value={book.rating} precision={0.1} readOnly />
                            <Typography variant="body2" color="text.secondary" component="span" sx={{ ml: 1 }}>
                                ({book.rating.toFixed(1)})
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Chip label={book.genre} color="primary" sx={{ mr: 1 }} />
                            <Chip 
                                label={new Date(book.publication_date).getFullYear()}
                                variant="outlined"
                            />
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="h6" gutterBottom>
                            About this book
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {book.description}
                        </Typography>

                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Publisher
                                </Typography>
                                <Typography variant="body1">
                                    {book.publisher || 'Not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Language
                                </Typography>
                                <Typography variant="body1">
                                    {book.language}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    ISBN
                                </Typography>
                                <Typography variant="body1">
                                    {book.isbn || 'Not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Pages
                                </Typography>
                                <Typography variant="body1">
                                    {book.page_count || 'Not available'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookDetail;