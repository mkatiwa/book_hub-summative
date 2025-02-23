// import React, { useEffect, useState } from 'react';
// import { fetchBooks } from './services/api';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import { AuthProvider, useAuth } from './context/AuthContext';

const theme = createTheme({
    // ... existing theme configuration
});

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? element : <Navigate to="/login" />;
};

export function App() {
  // const [] = useState<string>('Testing connection...');

  // useEffect(() => {
  //   const testConnection = async () => {
  //     try {
  //       await fetchBooks();
  //       setConnectionStatus('Successfully connected to backend!');
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     } catch (error) {
  //       setConnectionStatus('Failed to connect to backend');
  //     }
  //   };

    return (
      <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Router>
                    <Container maxWidth="lg">
                        <Routes>
                            <Route
                                path="/"
                                element={<PrivateRoute element={<BookList />} />}
                            />
                            <Route
                                path="/book/:id"
                                element={<PrivateRoute element={<BookDetail />} />}
                            />
                        </Routes>
                    </Container>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    )
    
    }