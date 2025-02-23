from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.TextField()
    genre = models.CharField(max_length=50)
    publication_date = models.DateField()
    cover_image = models.ImageField(upload_to='booksimg/',null=True)
    rating = models.FloatField(default=0.0)
    isbn = models.CharField(max_length=13, blank=True)
    publisher = models.CharField(max_length=100, blank=True)
    language = models.CharField(max_length=50, default='English')
    page_count = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title