export interface Book {
    publisher: string;
    language: ReactNode;
    page_count: string;
    isbn: string;
    id: number;
    title: string;
    author: string;
    description: string;
    genre: string;
    publication_date: string;
    cover_image: string | null;
    rating: number;
  }

  export interface BookFilter {
    genre?: string;
    author?: string;
    search?: string;
    ordering?: string;
  }