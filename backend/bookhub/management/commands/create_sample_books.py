from django.core.management.base import BaseCommand
from books.models import Book
from datetime import datetime
import random

class Command(BaseCommand):
    help = 'Creates sample books for development'

    def handle(self, *args, **kwargs):
        genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Romance', 'Non-Fiction']
        authors = ['J.K. Rowling', 'George Orwell', 'Agatha Christie', 'Jane Austen', 'Stephen King']
        
        for i in range(30):
            Book.objects.create(
                title=f"Sample Book {i+1}",
                author=random.choice(authors),
                description=f"This is a sample description for book {i+1}",
                genre=random.choice(genres),
                publication_date=datetime(random.randint(1990, 2023), random.randint(1, 12), random.randint(1, 28)),
                cover_image=f"https://picsum.photos/id/{random.randint(1, 200)}/300/450",
                rating=round(random.uniform(1.0, 5.0), 1)
            )
        
        self.stdout.write(self.style.SUCCESS('Successfully created 30 sample books'))